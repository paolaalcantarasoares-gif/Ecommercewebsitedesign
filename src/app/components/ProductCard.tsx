import { ShoppingCart } from 'lucide-react';
// Removido o import do Link
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    /* Trocado de Link para div e removido o atributo 'to' */
    <div className="group bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#262626] hover:border-[#444] transition-all duration-300">
      
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#262626]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between text-[10px] text-gray-400 mb-1 uppercase tracking-wider">
          <span>Marca: {product.marca}</span>
          <span>Aro: {product.aro || '-'}</span>
          <span>Furação: {product.furacao || '-'}</span>
        </div>
        
        <h3 className="text-white font-semibold mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>

        {/* Price and Action */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <div className="text-white text-xl font-bold">
              {product.price ? formatCurrency(product.price) : 'Consulte'}
            </div>
          </div>
          
          {/* Se você quiser que o botão de carrinho faça algo, adicione o onClick aqui */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              console.log('Adicionado ao carrinho:', product.id);
            }}
            className="p-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-md transition-colors"
            title="Adicionar ao carrinho"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}