import { ArrowRight, Truck, Shield, Award, Instagram } from 'lucide-react';
import { Link } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
import { strings } from '../constants/strings';

export function HomePage() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1553072464-6e106d8b602f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjB3aGVlbCUyMHNwb3J0cyUyMGNhcnxlbnwxfHx8fDE3NzMyNDYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {strings.home.heroTitle.split(' para ')[0]} <span className="text-[#dc2626]">para {strings.home.heroTitle.split(' para ')[1]}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {strings.home.heroSubtitle}
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md transition-colors text-lg font-semibold"
            >
              <span>{strings.home.shopNow}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {strings.home.shopByCategory.split(' por ')[0]} <span className="text-[#dc2626]">por {strings.home.shopByCategory.split(' por ')[1]}</span>
            </h2>
            <p className="text-gray-400 text-lg">{strings.home.findPerfectWheels}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/products"
                className="group relative h-80 rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${category.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                </div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#dc2626] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="inline-flex items-center space-x-2 text-[#dc2626] group-hover:translate-x-2 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                {strings.home.featuredProducts.split(' em ')[0]} <span className="text-[#dc2626]">em {strings.home.featuredProducts.split(' em ')[1]}</span>
              </h2>
              <p className="text-gray-400 text-lg">{strings.home.topPicks}</p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center space-x-2 text-[#dc2626] hover:text-white transition-colors"
            >
              <span>{strings.home.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 text-[#dc2626] hover:text-white transition-colors"
            >
              <span>{strings.home.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-[#dc2626] to-[#991b1b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {strings.home.specialOffer}
            </h2>
            <p className="text-white/90 text-xl mb-8">
              {strings.home.onAllSportWheels}
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-black hover:bg-[#1a1a1a] text-white px-8 py-4 rounded-md transition-colors text-lg font-semibold"
            >
              <span>{strings.home.shopSale}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#dc2626] rounded-full mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{strings.home.fastDelivery}</h3>
              <p className="text-gray-400">
                {strings.home.freeShipping}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#dc2626] rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{strings.home.securePayment}</h3>
              <p className="text-gray-400">
                {strings.home.securePaymentDesc}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#dc2626] rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{strings.home.qualityGuarantee}</h3>
              <p className="text-gray-400">
                {strings.home.qualityGuaranteeDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-[#dc2626] mb-4">
              <Instagram className="w-6 h-6" />
              <span className="font-semibold">{strings.home.instagramHandle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {strings.home.followOnInstagram.split(' no ')[0]} <span className="text-[#dc2626]">no {strings.home.followOnInstagram.split(' no ')[1]}</span>
            </h2>
            <p className="text-gray-400 text-lg">{strings.home.seeWheelsInAction}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1729243830701-b3acde954451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMGFsbG95JTIwc3BvcnRzfGVufDF8fHx8MTc3MzI0NjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1758563920433-4b89316160e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFsbG95JTIwd2hlZWwlMjByaW18ZW58MXx8fHwxNzczMjQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1772391579024-fc09e103be4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjB3aGVlbCUyMHJpbSUyMGF1dG9tb3RpdmV8ZW58MXx8fHwxNzczMjQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1732564401435-1a27110f2528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzcG9ydHMlMjBjYXIlMjB3aGVlbHxlbnwxfHx8fDE3NzMyNDYxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            ].map((image, idx) => (
              <a
                key={idx}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`Instagram post ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
