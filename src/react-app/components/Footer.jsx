import { Mail, Phone, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/30 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-[120px] w-auto" />
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for quality electrical machines and industrial solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Motors</li>
              <li className="text-gray-400 text-sm">Transformers</li>
              <li className="text-gray-400 text-sm">Circuit Breakers</li>
              <li className="text-gray-400 text-sm">Control Panels</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-red-600 flex-shrink-0" />
                <span>14-Samrat industries Area, Behind ST Work Shop, Gondal Road, Rajkot-36005.</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <div className='flex flex-col'>
                  <a href="tel:+917016330743">+91 70163 30743,</a>
                  <a href="tel:+919227029693">+91 92270 29693</a>
                </div>

              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a href="meeraelectricalandservicellp@gmail.com">meeraelectricalandservicellp@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-900/30 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Meera Electrical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
