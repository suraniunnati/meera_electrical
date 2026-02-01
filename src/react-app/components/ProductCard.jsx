import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/30 hover:-translate-y-2 animate-scale-in">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        {product.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-red-500 text-sm font-semibold mb-2">{product.category}</div>
        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Specifications */}
        <div className="space-y-2 mb-4">
          {product.specifications.slice(0, 3).map((spec, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-300 text-xs">
              <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>{spec}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600/10 border border-red-600/30 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all group/btn">
          <span className="font-medium">View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
