import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "5511913416504"; 
  
  const formatCurrency = (value: number | undefined) => {
    if (value === undefined || value === null) return 'Consulte';
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  const valorDisplay = formatCurrency(product.price);
  
  // Mensagem otimizada para o card visual no WhatsApp
  const textoMsg = `Olá! Tenho interesse no produto *${product.name}* com o valor de *${valorDisplay}*. \n\nAinda está disponível?\n\n${product.image}`;
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textoMsg)}`;

  return (
    <div className="group bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#262626] hover:border-[#dc2626]/50 transition-all duration-300 flex flex-col h-full shadow-2xl">
      {/* Container da Imagem */}
      <div className="relative aspect-square overflow-hidden bg-[#262626]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4 flex flex-col flex-1">
        {/* INFO SUPERIOR: Marca | Aro | Furação */}
        <div className="flex justify-between items-center text-[9px] text-gray-400 mb-2 uppercase font-black italic tracking-tighter">
          <span className="truncate max-w-[80px]">{product.marca || 'Performance'}</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span>Aro {product.aro || '-'}</span>
            {product.furacao && (
              <>
                <span className="text-[#dc2626] font-bold">|</span>
                <span className="text-white">Furação {product.furacao}</span>
              </>
            )}
          </div>
        </div>
        
        {/* Título do Produto */}
        <h3 className="text-white font-bold mb-3 line-clamp-2 min-h-[2.5rem] text-xs uppercase tracking-tight leading-tight">
          {product.name}
        </h3>

        {/* Preço e Botão */}
        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="text-white text-lg font-black italic tracking-tighter">
            {valorDisplay}
          </span>
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 p-2 px-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-md transition-all shadow-lg shadow-[#25D366]/10 font-black text-[9px] uppercase tracking-tighter whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </div>
  );
}