import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { strings } from '../constants/strings';

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#262626] mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* Brand */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-6">
              <span className="text-5xl font-black text-white">FAST</span>
              <span className="text-5xl font-black text-[#dc2626] ml-2">RODAS</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              {strings.footer.brandDesc}   
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100065162403809&ref=NONE_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#dc2626] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/fast_rodas/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#dc2626] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-bold text-2xl mb-6">{strings.footer.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center space-x-3 text-gray-300 text-base">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{strings.footer.address}</span>
              </li>
              <li className="flex items-center justify-center space-x-3 text-gray-300 text-base">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{strings.footer.phone}</span>
              </li>
              <li className="flex items-center justify-center space-x-3 text-gray-300 text-base">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{strings.footer.email}</span>
              </li>
              <li className="flex items-center justify-center space-x-3 text-gray-300 text-base">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>{strings.footer.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Fast Rodas. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/5511945238994"
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
