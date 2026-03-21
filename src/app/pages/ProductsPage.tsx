import { useState, useEffect } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { supabase } from '../utils/supabase';
import { strings } from '../constants/strings';
import type { Product } from '../data/products';

export function ProductsPage() {
  // --- Estados ---
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<string>('popular');

  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedFuracao, setSelectedFuracao] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  // --- Busca de Dados ---
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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  // --- Lógica de Listas para Filtros (Garantindo 'all' SEMPRE no topo) ---
  
  // 1. Marcas
  const sortedBrands = Array.from(new Set(products.map(p => p.marca?.trim())))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
  const finalBrands = ['all', ...sortedBrands];

  // 2. Tamanhos (Aros)
  const sortedSizes = Array.from(new Set(products.map(p => p.aro?.toString().trim())))
    .filter(Boolean)
    .sort((a, b) => Number(a) - Number(b));
  const finalSizes = ['all', ...sortedSizes];

  // 3. Furações
  const sortedFuracoes = Array.from(new Set(products.map(p => p.furacao?.trim().toUpperCase())))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
  const finalFuracoes = ['all', ...sortedFuracoes];

  const maxAvailablePrice = products.length > 0 ? Math.max(...products.map(p => p.price)) : 5000;

  // --- Lógica de Filtragem ---
  const filteredProducts = products.filter(product => {
    if (selectedBrand !== 'all' && product.marca?.trim() !== selectedBrand) return false;
    if (selectedSize !== 'all' && product.aro?.toString().trim() !== selectedSize) return false;
    if (selectedFuracao !== 'all' && product.furacao?.trim().toUpperCase() !== selectedFuracao) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  // --- Componente de Opção de Filtro Padronizada ---
  const FilterOption = ({ label, isSelected, onClick, isHeader = false }: any) => (
    <label 
      className={`flex items-center space-x-3 cursor-pointer group py-1.5 ${isHeader ? 'border-b border-white/10 mb-2 pb-2.5' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? 'border-[#dc2626] bg-[#dc2626]/10' : 'border-gray-600 group-hover:border-gray-400'}`}>
        {isSelected && <div className="w-2 h-2 rounded-full bg-[#dc2626] shadow-[0_0_8px_rgba(220,38,38,0.5)]" />}
      </div>
      <span className={`text-sm transition-colors ${isSelected ? 'text-white font-bold' : 'text-gray-400 group-hover:text-gray-200'}`}>
        {label}
      </span>
    </label>
  );

  const FilterSidebar = () => (
    <div className="space-y-10">
      {/* Marcas */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 italic">Marcas</h3>
        <div className="flex flex-col">
          {finalBrands.map(brand => (
            <FilterOption 
              key={brand}
              label={brand === 'all' ? 'Todas as Marcas' : brand}
              isSelected={selectedBrand === brand}
              onClick={() => setSelectedBrand(brand)}
              isHeader={brand === 'all'}
            />
          ))}
        </div>
      </div>

      {/* Tamanhos */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 italic">Tamanho do Aro</h3>
        <div className="flex flex-col">
          {finalSizes.map(size => (
            <FilterOption 
              key={size}
              label={size === 'all' ? 'Todos os Tamanhos' : `Aro ${size}`}
              isSelected={selectedSize === size}
              onClick={() => setSelectedSize(size)}
              isHeader={size === 'all'}
            />
          ))}
        </div>
      </div>

      {/* Furações */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 italic">Furação</h3>
        <div className="flex flex-col">
          {finalFuracoes.map(f => (
            <FilterOption 
              key={f}
              label={f === 'all' ? 'Todas as Furações' : f}
              isSelected={selectedFuracao === f}
              onClick={() => setSelectedFuracao(f)}
              isHeader={f === 'all'}
            />
          ))}
        </div>
      </div>

      {/* Faixa de Preço */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 italic">Faixa de Preço</h3>
        <div className="flex flex-col">
          <input
            type="range"
            min="0"
            max={maxAvailablePrice}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full h-3 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#dc2626]"
          />
          <div className="flex justify-between text-[15px] font-mono text-gray-500">
            <span>{formatCurrency(priceRange[0])}</span>
            <span className="text-red font-bold">{formatCurrency(priceRange[1])}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => { setSelectedBrand('all'); setSelectedSize('all'); setSelectedFuracao('all'); setPriceRange([0, maxAvailablePrice]); }}
        className="w-full py-3 bg-white/5 hover:bg-[#dc2626] text-white text-[10px] font-black uppercase tracking-widest rounded transition-all duration-300 border border-white/5"
      >
        Limpar Filtros
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter">Fast <span className="text-[#dc2626]">Rodas</span></h1>
            <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">
              {loading ? 'Carregando estoque...' : `${filteredProducts.length} Modelos Disponíveis`}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-gray-500 uppercase font-bold">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#111] border border-white/10 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded outline-none focus:border-[#dc2626] cursor-pointer"
            >
              <option value="popular">Destaques</option>
              <option value="price-low">Menor Preço</option>
              <option value="price-high">Maior Preço</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar de Filtros */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24">
               <FilterSidebar />
            </div>
          </aside>

          {/* Grid de Produtos */}
          <main className="flex-1">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <div key={n} className="bg-[#111] aspect-[4/5] rounded-xl border border-white/5"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}