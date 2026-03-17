import { useState, useEffect } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { supabase } from '../utils/supabase';
import { strings } from '../constants/strings';
import type { Product } from '../data/products';

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedFuracao, setSelectedFuracao] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState<string>('popular');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('produtos')
          .select('*');

        console.log('Fetched products:', data);

        if (error) {
          console.error('Error fetching products:', error);
          return;
        }

        const mappedProducts = (data || []).map(item => ({
          id: item.id,
          name: item.descricao,
          price: item.valor,
          image: item.url_imagem,
          category: 'Geral', // Default since not in table
          marca: item.marca,  // Default
          aro: item.aro, // Default rim size as number
          furacao: item.furacao, // Default bolt pattern
          size: [], // Default
          color: [], // Default
          rating: 0, // Default
          reviews: 0, // Default
          featured: false, // Default
          description: item.descricao,
          specifications: [], // Default
          images: [item.url_imagem] // Use the same image
        }));

        setProducts(mappedProducts);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Translation mappings
  const translateCategory = (cat: string) => {
    const translations: { [key: string]: string } = {
      'all': 'Todos',
      'Sport Wheels': 'Rodas Esportivas',
      'SUV Wheels': 'Rodas para SUV'
    };
    return translations[cat] || cat;
  };

  const translateBrand = (brand: string) => {
    const translations: { [key: string]: string } = {
      'all': 'Todos',
      'Racing Pro': 'Racing Pro',
      'Elite Motors': 'Elite Motors',
      'Chrome Master': 'Chrome Master'
    };
    return translations[brand] || brand;
  };

  const translateSize = (size: string) => {
    return size === 'all' ? 'Todos' : size;
  };

  const translateFuracao = (furacao: string) => {
    return furacao === 'all' ? 'Todos' : furacao;
  };

  // Filter products
  let filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedBrand !== 'all' && product.marca !== selectedBrand) return false;
    if (selectedSize !== 'all' && product.aro?.toString() !== selectedSize) return false;
    if (selectedFuracao !== 'all' && !product.furacao.includes(selectedFuracao)) return false;  
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return 0; // In a real app, would sort by date
      case 'popular':
      default:
        return b.rating - a.rating;
    }
  });

  const brands = ['all', ...Array.from(new Set(products.map(p => p.marca))).sort((a, b) => a.localeCompare(b))];
  const sizes = ['all', ...Array.from(new Set(products.map(p => p.aro))).sort((a, b) => a - b)];
  const furacao = ['all', ...Array.from(new Set(products.map(p => p.furacao))).sort((a, b) => a.localeCompare(b))];

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Brand Filter */}
      <div>
        <h3 className="text-white font-semibold mb-3">{strings.products.brand}</h3>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="radio"
                name="brand"
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
                className="w-4 h-4 text-[#dc2626] border-gray-600 focus:ring-[#dc2626] bg-[#1a1a1a]"
              />
              <span className="text-gray-400 group-hover:text-white transition-colors capitalize">
                {translateBrand(brand)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="text-white font-semibold mb-3">{strings.products.wheelSize}</h3>
        <div className="space-y-2">
          {sizes.map(size => (
            <label key={size} className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="radio"
                name="size"
                checked={selectedSize === size}
                onChange={() => setSelectedSize(size.toString())}
                className="w-4 h-4 text-[#dc2626] border-gray-600 focus:ring-[#dc2626] bg-[#1a1a1a]"
              />
              <span className="text-gray-400 group-hover:text-white transition-colors capitalize">
                {translateSize(size.toString())}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Furacao Filter */}
      <div>
        <h3 className="text-white font-semibold mb-3">{strings.products.tituloFuracao}</h3>
        <div className="space-y-2">
          {furacao.map(furacao => (
            <label key={furacao} className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="radio"
                name="furacao"
                checked={selectedFuracao === furacao}
                onChange={() => setSelectedFuracao(furacao)}
                className="w-4 h-4 text-[#dc2626] border-gray-600 focus:ring-[#dc2626] bg-[#1a1a1a]"
              />
              <span className="text-gray-400 group-hover:text-white transition-colors capitalize">
                {translateFuracao(furacao || 'all')}
              </span>
            </label>
          ))}
        </div>
      </div>


      {/* Price Range */}
      <div>
        <h3 className="text-white font-semibold mb-3">{strings.products.priceRange}</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="2000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full accent-[#dc2626]"
          />
          <div className="flex justify-between text-gray-400 text-sm">
            <span>R${priceRange[0]}</span>
            <span>R${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => {
          setSelectedCategory('all');
          setSelectedBrand('all');
          setSelectedSize('all');
          setPriceRange([0, 2000]);
        }}
        className="w-full px-4 py-2 bg-[#262626] hover:bg-[#333333] text-white rounded-md transition-colors"
      >
        {strings.products.resetFilters}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            {strings.products.allProducts.split(' os ')[0]} <span className="text-[#dc2626]">os {strings.products.allProducts.split(' os ')[1]}</span>
          </h1>
          <p className="text-gray-400">
            {loading ? 'Carregando produtos...' : strings.products.showingProducts.replace('{filtered}', filteredProducts.length.toString()).replace('{total}', products.length.toString())}
          </p>
        </div>

        {/* Filters and Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center space-x-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#262626] text-white rounded-md transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>{strings.products.filters}</span>
          </button>

          <div className="flex items-center space-x-2 w-full md:w-auto">
            <label className="text-gray-400 text-sm whitespace-nowrap">{strings.products.sortBy}</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 md:flex-initial px-4 py-2 bg-[#1a1a1a] border border-[#262626] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
            >
              <option value="popular">{strings.products.mostPopular}</option>
              <option value="price-low">{strings.products.priceLowToHigh}</option>
              <option value="price-high">{strings.products.priceHighToLow}</option>
              <option value="newest">{strings.products.newest}</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-[#1a1a1a] border border-[#262626] rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">{strings.products.filters}</h2>
                <SlidersHorizontal className="w-5 h-5 text-[#dc2626]" />
              </div>
              <FilterSidebar />
            </div>
          </aside>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/80" onClick={() => setShowFilters(false)} />
              <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[90vw] bg-[#1a1a1a] border-l border-[#262626] overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white">{strings.products.filters}</h2>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="p-2 text-gray-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <FilterSidebar />
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">Carregando produtos...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">{strings.products.noProductsFound}</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedBrand('all');
                    setSelectedSize('all');
                    setPriceRange([0, 2000]);
                  }}
                  className="mt-4 text-[#dc2626] hover:text-white transition-colors"
                >
                  {strings.products.clearAllFilters}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
