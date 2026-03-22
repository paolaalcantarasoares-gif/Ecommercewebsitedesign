import { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { supabase } from '../utils/supabase';
import type { Product } from '../data/products';

export function ProductsPage() {
  // --- Estados ---
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<string>('popular');

  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedFuracao, setSelectedFuracao] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  // --- Fetch ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('produtos').select('*');
        if (error) throw error;

        const mappedProducts: Product[] = (data || []).map(item => ({
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

        setProducts(mappedProducts);

        if (mappedProducts.length > 0) {
          const maxPrice = Math.max(...mappedProducts.map(p => p.price));
          setPriceRange([0, maxPrice]);
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
      currency: 'BRL',
    }).format(value);

  const resetFilters = () => {
    setSelectedBrand('all');
    setSelectedSize('all');
    setSelectedFuracao('all');
    setPriceRange([0, maxAvailablePrice]);
  };

  // --- Filtros ---
  const sortedBrands = Array.from(new Set(products.map(p => p.marca?.trim())))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
  const finalBrands = ['all', ...sortedBrands];

  const sortedSizes = Array.from(new Set(products.map(p => p.aro?.toString().trim())))
    .filter(Boolean)
    .sort((a, b) => Number(a) - Number(b));
  const finalSizes = ['all', ...sortedSizes];

  const sortedFuracoes = Array.from(new Set(products.map(p => p.furacao?.trim().toUpperCase())))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
  const finalFuracoes = ['all', ...sortedFuracoes];

  const maxAvailablePrice =
    products.length > 0 ? Math.max(...products.map(p => p.price)) : 5000;

  const filteredProducts = products
    .filter(product => {
      if (selectedBrand !== 'all' && product.marca?.trim() !== selectedBrand) return false;
      if (selectedSize !== 'all' && product.aro?.toString().trim() !== selectedSize) return false;
      if (selectedFuracao !== 'all' && product.furacao?.trim().toUpperCase() !== selectedFuracao) return false;
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  // --- Components ---
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-6xl mb-4">🔍</div>

      <h2 className="text-xl font-bold text-white mb-2">
        Nenhum produto encontrado
      </h2>

      <p className="text-gray-500 text-sm mb-6 max-w-md">
        Não encontramos produtos com esses filtros.
        Tente ajustar ou limpar os filtros.
      </p>

      <button
        onClick={resetFilters}
        className="px-6 py-3 bg-[#dc2626] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest rounded transition-all"
      >
        Limpar filtros
      </button>
    </div>
  );

  const ProductsGrid = () => {
    if (filteredProducts.length === 0) return <EmptyState />;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };

  const FilterOption = ({ label, isSelected, onClick, isHeader = false }: any) => (
    <label
      className={`flex items-center space-x-3 cursor-pointer group py-1.5 ${
        isHeader ? 'border-b border-white/10 mb-2 pb-2.5' : ''
      }`}
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
        {isSelected && (
          <div className="w-2 h-2 rounded-full bg-[#dc2626]" />
        )}
      </div>
      <span className={isSelected ? 'text-white font-bold' : 'text-gray-400'}>
        {label}
      </span>
    </label>
  );

  const FilterSidebar = () => (
    <div className="space-y-10">
      <div>
        <h3 className="text-xs text-gray-500 mb-4">Marcas</h3>
        {finalBrands.map(brand => (
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
        {finalSizes.map(size => (
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
        {finalFuracoes.map(f => (
          <FilterOption
            key={f}
            label={f === 'all' ? 'Todas' : f}
            isSelected={selectedFuracao === f}
            onClick={() => setSelectedFuracao(f)}
          />
        ))}
      </div>

      <div>
        <h3 className="text-xs text-gray-500 mb-4">Preço</h3>
        <input
          type="range"
          min="0"
          max={maxAvailablePrice}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full accent-[#dc2626]"

        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>{formatCurrency(priceRange[0])}</span>
          <span>{formatCurrency(priceRange[1])}</span>
        </div>
      </div>

      <button
        onClick={resetFilters}
        className="w-full py-2 bg-[#dc2626] rounded"
      >
        Limpar filtros
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
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
            <FilterSidebar />
          </aside>

          <main className="flex-1">
            {loading ? (
              <div className="grid grid-cols-3 gap-8 animate-pulse">
                {[1,2,3,4,5,6].map(n => (
                  <div key={n} className="bg-[#111] h-60 rounded" />
                ))}
              </div>
            ) : (
              <ProductsGrid />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}