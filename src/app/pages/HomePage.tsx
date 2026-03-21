import { ArrowRight, Truck, Shield, Award, Instagram } from 'lucide-react';
import { Link } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';

export function HomePage() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Imagem de Fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] hover:scale-110"
          style={{
            backgroundImage: `url('/hero-banner.jpg')`, 
          }}
        >
          {/* Overlay Escuro para leitura */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.85] uppercase italic tracking-tighter">
              Performance <br />
              <span className="text-[#dc2626]">ao Extremo</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium max-w-lg leading-relaxed border-l-4 border-[#dc2626] pl-6">
              Domine as pistas e as ruas com rodas de alta performance. 
              Estilo agressivo e engenharia de ponta para o seu projeto.
            </p>

            <Link
              to="/products"
              className="group inline-flex items-center space-x-3 bg-[#dc2626] hover:bg-white hover:text-black text-white px-10 py-5 rounded-sm transition-all duration-300 text-lg font-black uppercase tracking-widest"
            >
              <span>Ver Estoque</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

        {/* Linha de detalhe na base */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#dc2626] to-transparent"></div>
      </section>

      {/* Categorias */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
              Nossas <span className="text-[#dc2626]">Categorias</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/products"
                className="group relative h-[450px] rounded-2xl overflow-hidden border border-white/5"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${category.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-[#dc2626]/20 transition-colors"></div>
                </div>
                <div className="relative h-full flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-black text-white mb-2 uppercase italic">{category.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{category.description}</p>
                  <div className="text-[#dc2626] font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform uppercase tracking-tighter">
                    <span>Explorar</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Destaques (Featured) */}
      <section className="py-20 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                Modelos <span className="text-[#dc2626]">em Destaque</span>
              </h2>
            </div>
            <Link to="/products" className="text-[#dc2626] font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
              Ver tudo
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}