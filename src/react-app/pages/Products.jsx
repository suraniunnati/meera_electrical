import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from './ProductCard';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';
import { products, categories } from '../../data/products';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 animate-slide-up">
            Our <span className="text-red-600">Products</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-slide-up delay-200">
            Browse our comprehensive range of electrical machines and equipment
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12 space-y-6">
          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto animate-fade-in delay-300">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600/50 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in delay-400">
            <div className="flex items-center space-x-2 text-gray-400">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/50'
                  : 'bg-gray-900 text-gray-400 border border-red-900/30 hover:border-red-600/50'
              }`}
            >
              All Products
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/50'
                    : 'bg-gray-900 text-gray-400 border border-red-900/30 hover:border-red-600/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {filteredProducts.map((product, index) => (
            <ScrollAnimatedSection key={product.id} animation="scroll-scale-in" delay={index * 80}>
              <ProductCard product={product} />
           </ScrollAnimatedSection>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
         <ScrollAnimatedSection animation="scroll-fade-in" className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 rounded-full mb-6">
              <Search className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
         </ScrollAnimatedSection>
        )}
      </div>
    </div>
  );
}
