import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { strings } from '../constants/strings';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-[#262626]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-black text-white">FAST</span>
              <span className="text-2xl font-black text-[#dc2626] ml-1">RODAS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#dc2626] transition-colors">
              {strings.header.home}
            </Link>
            <Link to="/products" className="text-white hover:text-[#dc2626] transition-colors">
              {strings.header.products}
            </Link>
            <a href="#categories" className="text-white hover:text-[#dc2626] transition-colors">
              {strings.header.categories}
            </a>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-[#1a1a1a] rounded-md text-white hover:bg-[#262626] transition-colors">
              <Search className="w-4 h-4" />
              <span className="text-sm">{strings.header.search}</span>
            </button>
            
            <button className="relative p-2 text-white hover:text-[#dc2626] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#dc2626] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#262626] bg-black">
          <nav className="px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-[#dc2626] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {strings.header.home}
            </Link>
            <Link
              to="/products"
              className="block text-white hover:text-[#dc2626] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {strings.header.products}
            </Link>
            <a
              href="#categories"
              className="block text-white hover:text-[#dc2626] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {strings.header.categories}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
