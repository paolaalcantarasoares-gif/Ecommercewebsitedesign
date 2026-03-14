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
          {product.oldPrice && (
            <div className="absolute top-4 left-4 bg-[#dc2626] text-white px-3 py-1 rounded-md text-sm font-semibold">
              {strings.productCard.sale}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="text-xs text-gray-400 mb-1">{product.brand}</div>
          <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-[#dc2626] transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-[#dc2626] text-[#dc2626]'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white text-xl font-bold">
                ${product.price.toFixed(2)}
              </div>
              {product.oldPrice && (
                <div className="text-gray-500 text-sm line-through">
                  ${product.oldPrice.toFixed(2)}
                </div>
              )}
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
