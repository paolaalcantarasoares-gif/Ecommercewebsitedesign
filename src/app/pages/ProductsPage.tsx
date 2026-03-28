import { useState, useEffect, useMemo, useCallback } from 'react';
import { ProductCard } from '../components/ProductCard';
import { supabase } from '../utils/supabase';
import type { Product } from '../data/products';
import React from 'react';

// ✅ Slider isolado
const PriceSlider = React.memo(({
  max,
  sliderDisplay,
  onChange,
  onCommit,
  formatCurrency,
  priceRange
}: any) => {
  return (
    <div>
      <h3 className="text-xs text-gray-500 mb-4">Preço</h3>

      <input
        type="range"
        min="0"
        max={max}
        value={sliderDisplay}
        onChange={onChange}
        onMouseUp={onCommit}
        onTouchEnd={onCommit}
        className="w-full cursor-pointer accent-[#dc2626]"
      />

      <div className="flex justify-between text-sm text-gray-400">
        <span>{formatCurrency(priceRange[0])}</span>
        <span>{formatCurrency(sliderDisplay)}</span>
      </div>
    </div>
  );
});

// ✅ Sidebar memoizada
const FilterSidebar = React.memo((props: any) => {
  const {
    finalBrands,
    finalSizes,
    finalFuracoes,
    selectedBrand,
    selectedSize,
    selectedFuracao,
    setSelectedBrand,
    setSelectedSize,
    setSelectedFuracao,
    maxAvailablePrice,
    sliderDisplay,
    handleSliderChange,
    handleSliderCommit,
    formatCurrency,
    priceRange,
    resetFilters
  } = props;

  const FilterOption = ({ label, isSelected, onClick }: any) => (
    <label
      className="flex items-center space-x-3 cursor-pointer group py-1.5"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
        isSelected
          ? 'border-[#dc2626] bg-[#dc2626]/10'
          : 'border-gray-600 group-hover:border-gray-400'
      }`}>
        {isSelected && <div className="w-2 h-2 rounded-full bg-[#dc2626]" />}
      </div>
      <span className={isSelected ? 'text-white font-bold' : 'text-gray-400'}>
        {label}
      </span>
    </label>
  );

  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xs text-gray-500 mb-4">Marcas</h3>
        {finalBrands.map((brand: string) => (
          <FilterOption
            key={brand}
            label={brand === 'all' ? 'Todas as Marcas' : brand}
            isSelected={selectedBrand === brand}
            onClick={() => setSelectedBrand(brand)}
          />
        ))}
      </div>

      <div>
        <h3 className="text-xs text-gray-500 mb-4">Tamanho</h3>
        {finalSizes.map((size: string) => (
          <FilterOption
            key={size}
            label={size === 'all' ? 'Todos' : `Aro ${size}`}
            isSelected={selectedSize === size}
            onClick={() => setSelectedSize(size)}
          />
        ))}
      </div>

      <div>
        <h3 className="text-xs text-gray-500 mb-4">Furação</h3>
        {finalFuracoes.map((f: string) => (
          <FilterOption
            key={f}
            label={f === 'all' ? 'Todas' : f}
            isSelected={selectedFuracao === f}
            onClick={() => setSelectedFuracao(f)}
          />
        ))}
      </div>

      <PriceSlider
        max={maxAvailablePrice}
        sliderDisplay={sliderDisplay}
        onChange={handleSliderChange}
        onCommit={handleSliderCommit}
        formatCurrency={formatCurrency}
        priceRange={priceRange}
      />

      <button
        onClick={resetFilters}
        className="w-full py-2 bg-[#dc2626] rounded"
      >
        Limpar filtros
      </button>
    </div>
  );
});

// ✅ Grid memoizado
const ProductsGrid = React.memo(({ products }: { products: Product[] }) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-xl font-bold text-white mb-2">
          Nenhum produto encontrado
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
});

export function ProductsPage() {
  // --- Estados ---
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('popular');

  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedFuracao, setSelectedFuracao] = useState('all');

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sliderDisplay, setSliderDisplay] = useState(10000);

  // --- Handlers estáveis ---
  const handleSliderChange = useCallback((e: any) => {
    setSliderDisplay(Number(e.target.value));
  }, []);

  const handleSliderCommit = useCallback((e: any) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
  }, []);

  // --- Fetch ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('produtos').select('*');
        if (error) throw error;

        // ✅ CORREÇÃO DE TIPAGEM AQUI
        const mapped: Product[] = (data || []).map((item: any) => ({
          id: item.id,
          name: item.descricao,
          price: item.valor,
          image: item.url_imagem,
          category: item.categoria || 'Geral',
          marca: item.marca,
          aro: item.aro,
          furacao: item.furacao || '',
          size: [],
          color: [],
          rating: 0,
          reviews: 0,
          featured: false,
          description: item.descricao,
          specifications: [],
          images: [item.url_imagem]
        }));

        setProducts(mapped);

        if (mapped.length) {
          const max = Math.max(...mapped.map(p => p.price));
          setPriceRange([0, max]);
          setSliderDisplay(max);
        }
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // --- Utils ---
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);

  const maxAvailablePrice = useMemo(() => {
    return products.length
      ? Math.max(...products.map(p => p.price))
      : 5000;
  }, [products]);

  const resetFilters = () => {
    setSelectedBrand('all');
    setSelectedSize('all');
    setSelectedFuracao('all');
    setPriceRange([0, maxAvailablePrice]);
    setSliderDisplay(maxAvailablePrice);
  };

  // --- Filtros ---
  const filteredProducts = useMemo(() => {
    return products
      .filter(p => {
        if (selectedBrand !== 'all' && p.marca?.trim() !== selectedBrand) return false;
        if (selectedSize !== 'all' && String(p.aro)?.trim() !== selectedSize) return false;
        if (selectedFuracao !== 'all' && p.furacao?.trim().toUpperCase() !== selectedFuracao) return false;
        if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
      });
  }, [products, selectedBrand, selectedSize, selectedFuracao, priceRange, sortBy]);

  const finalBrands = useMemo(
    () => ['all', ...Array.from(new Set(products.map(p => p.marca?.trim()))).filter(Boolean)],
    [products]
  );

  const finalSizes = useMemo(
    () => ['all', ...Array.from(new Set(products.map(p => p.aro?.toString().trim()))).filter(Boolean)],
    [products]
  );

  const finalFuracoes = useMemo(
    () => ['all', ...Array.from(new Set(products.map(p => p.furacao?.trim().toUpperCase()))).filter(Boolean)],
    [products]
  );

  // --- Render ---
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-10 flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Fast <span className="text-[#dc2626]">Rodas</span>
            </h1>
            <p className="text-gray-500 text-sm">
              {loading ? 'Carregando...' : `${filteredProducts.length} produtos`}
            </p>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#111] px-3 py-2"
          >
            <option value="popular">Destaques</option>
            <option value="price-low">Menor preço</option>
            <option value="price-high">Maior preço</option>
          </select>
        </div>

        <div className="flex gap-10">
          <aside className="w-64">
            <FilterSidebar
              {...{
                finalBrands,
                finalSizes,
                finalFuracoes,
                selectedBrand,
                selectedSize,
                selectedFuracao,
                setSelectedBrand,
                setSelectedSize,
                setSelectedFuracao,
                maxAvailablePrice,
                sliderDisplay,
                handleSliderChange,
                handleSliderCommit,
                formatCurrency,
                priceRange,
                resetFilters
              }}
            />
          </aside>

          <main className="flex-1">
            {loading ? (
              <div className="grid grid-cols-3 gap-8 animate-pulse">
                {[1,2,3,4,5,6].map(n => (
                  <div key={n} className="bg-[#111] h-60 rounded" />
                ))}
              </div>
            ) : (
              <ProductsGrid products={filteredProducts} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}