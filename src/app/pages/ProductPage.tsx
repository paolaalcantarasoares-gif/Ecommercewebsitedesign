import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Star, ShoppingCart, MessageCircle, ChevronLeft, Check } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <Link to="/products" className="text-[#dc2626] hover:text-white transition-colors">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const whatsappMessage = `Olá, tenho interesse no ${product.name} (${selectedSize || 'tamanho não selecionado'}, ${selectedColor || 'cor não selecionada'})`;  
  const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-[#1a1a1a] mb-4 border border-[#262626]">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden bg-[#1a1a1a] border-2 transition-colors ${
                    selectedImage === idx ? 'border-[#dc2626]' : 'border-[#262626] hover:border-[#dc2626]/50'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm text-gray-400 mb-2">{product.marca}</div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#dc2626] text-[#dc2626]'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline space-x-3">
                <span className="text-4xl font-black text-white">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="text-white font-semibold mb-3 block">Wheel Size</label>
              <div className="flex flex-wrap gap-2">
                {product.size.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border transition-colors ${
                      selectedSize === size
                        ? 'border-[#dc2626] bg-[#dc2626] text-white'
                        : 'border-[#262626] bg-[#1a1a1a] text-gray-400 hover:border-[#dc2626]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="text-white font-semibold mb-3 block">Color</label>
              <div className="flex flex-wrap gap-2">
                {product.color.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md border transition-colors ${
                      selectedColor === color
                        ? 'border-[#dc2626] bg-[#dc2626] text-white'
                        : 'border-[#262626] bg-[#1a1a1a] text-gray-400 hover:border-[#dc2626]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-white font-semibold mb-3 block">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-md bg-[#1a1a1a] border border-[#262626] text-white hover:border-[#dc2626] transition-colors"
                >
                  -
                </button>
                <span className="text-white text-lg font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-md bg-[#1a1a1a] border border-[#262626] text-white hover:border-[#dc2626] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <button className="w-full flex items-center justify-center space-x-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-4 rounded-md transition-colors text-lg font-semibold">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 rounded-md transition-colors text-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Buy via WhatsApp</span>
              </a>
            </div>

            {/* Features */}
            <div className="border-t border-[#262626] pt-6">
              <h3 className="text-white font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-gray-400">
                  <Check className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <span>Premium quality materials</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-400">
                  <Check className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <span>Manufacturer warranty included</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-400">
                  <Check className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <span>Professional installation recommended</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-400">
                  <Check className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <span>Free shipping on orders over $500</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
            Technical <span className="text-[#dc2626]">Specifications</span>
          </h2>
          <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg overflow-hidden">
            <div className="divide-y divide-[#262626]">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="grid grid-cols-2 p-4">
                  <div className="text-gray-400">{spec.label}</div>
                  <div className="text-white font-semibold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
              Related <span className="text-[#dc2626]">Products</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
