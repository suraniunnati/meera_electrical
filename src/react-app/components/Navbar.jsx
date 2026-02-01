import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-red-900/30 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-red-600 group-hover:text-red-500 transition-colors" />
              <div className="absolute inset-0 bg-red-600/20 blur-xl group-hover:bg-red-600/40 transition-all" />
            </div>
            <span className="text-xl font-bold text-white">Meera Electrical</span>
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
            <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-900/50 hover:shadow-red-900/70">
              Get Quote
            </button>
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
            <button className="w-full px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-900/50">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
