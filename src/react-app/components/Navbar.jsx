import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import Logo from '../../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black border-b border-red-900/30 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative logo">
              <img src={Logo} alt="Logo" className="h-[120px] w-auto" />
              </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-red-500 transition-colors font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-300 hover:text-red-500 transition-colors font-medium">
              Products
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-red-500 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-red-500 transition-colors font-medium">
              Contact
            </Link>
           
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-red-500 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-red-900/30 animate-slide-up">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Contact
            </Link>
           
          </div>
        </div>
      )}
    </nav>
  );
}
