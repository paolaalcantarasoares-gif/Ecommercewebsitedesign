import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import type { Product } from '../data/products';
import { strings } from '../constants/strings';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#262626] hover:border-[#dc2626] transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-[#262626]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Marca: {product.brand}</span>
            <span>Aro: {product.aro || '-'}</span>
            <span>Furacao: {product.furacao || '-'}</span>
          </div>
          <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-[#dc2626] transition-colors">
            {product.name}
          </h3>

          

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white text-xl font-bold">
                R$ {product.price ? product.price.toFixed(2) : '-'}
              </div>
            </div>
            <button className="p-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-md transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
