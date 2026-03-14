import { Facebook, Instagram, Twitter, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { strings } from '../constants/strings';

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#262626] mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-black text-white">FAST</span>
              <span className="text-2xl font-black text-[#dc2626] ml-1">RODAS</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {strings.footer.brandDesc}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors text-sm">
                  {strings.footer.products}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors text-sm">
                  {strings.footer.categories}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors text-sm">
                  {strings.footer.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">{strings.footer.customerService}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors text-sm">
                  {strings.footer.shippingPolicy}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors text-sm">
                  {strings.footer.returnPolicy}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors text-sm">
                  {strings.footer.faq}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dc2626] transition-colors text-sm">
                  {strings.footer.warranty}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{strings.footer.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{strings.footer.address}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{strings.footer.phone}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{strings.footer.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Fast Rodas. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
