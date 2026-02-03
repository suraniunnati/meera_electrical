import { ArrowRight, Zap, Shield, Award, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';
import { products } from '../../data/products';

export default function Home() {
    const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className='absolute top-0 left-0 w-full h-full opacity-15'>
            <img src="https://i.makeagif.com/media/1-20-2023/oRsQoO.gif" alt="" className='bg-cover bg-center h-full w-full'/>
          </div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 text-sm font-semibold mb-8 animate-fade-in">
            <Zap className="w-4 h-4" />
            <span>Powering Industry Since</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Premium Electrical
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Machines & Solutions
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up delay-200">
            Trusted supplier of high-quality electrical equipment for industrial and commercial applications
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <Link
              to="/products"
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-2xl shadow-red-900/50 hover:shadow-red-900/70 flex items-center space-x-2"
            >
              <span className="font-semibold">Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all"
            >
              <span className="font-semibold">Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-600/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-red-600 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Quality Assured', desc: 'ISO certified products' },
              { icon: Award, title: 'Expert Support', desc: '24/7 technical assistance' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Nationwide shipping' },
              { icon: Zap, title: 'Trusted Brand', desc: '25+ years experience' }
            ].map((feature, index) => (
               <ScrollAnimatedSection key={index} animation="scroll-scale-in" delay={index * 100}>
                <div className="group text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl hover:border-red-600/50 transition-all hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimatedSection animation="scroll-slide-right" className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                <span>About Meera Electrical</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Your Trusted Partner in <span className="text-red-600">Electrical Solutions</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Since 1995, Meera Electrical has been at the forefront of providing premium electrical machines and equipment to industries across the nation. Our commitment to quality, innovation, and customer satisfaction has made us a leader in the electrical supply industry.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We specialize in industrial-grade electrical equipment, from motors and generators to transformers and control panels. Every product we offer meets the highest standards of safety and performance.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600/10 border border-red-600/30 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all group"
              >
                <span className="font-semibold">Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
             </ScrollAnimatedSection>
            <ScrollAnimatedSection animation="scroll-slide-left" className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '25+', label: 'Years Experience' },
                    { number: '10K+', label: 'Happy Clients' },
                    { number: '500+', label: 'Products Available' },
                    { number: '24/7', label: 'Support Available' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-black/50 rounded-xl border border-red-900/20">
                      <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimatedSection animation="scroll-slide-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-red-600">Meera Electrical</span>
            </h2>
           <p className="text-gray-400 max-w-2xl mx-auto">
              We go beyond just supplying equipment - we deliver complete electrical solutions
            </p>
                </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Premium Quality',
                desc: 'All our products are sourced from certified manufacturers and undergo rigorous quality checks',
                icon: '🏆'
              },
              {
                title: 'Competitive Pricing',
                desc: 'Best prices in the market without compromising on quality or service standards',
                icon: '💰'
              },
              {
                title: 'Expert Consultation',
                desc: 'Our technical team provides free consultation to help you choose the right equipment',
                icon: '💡'
              },
              {
                title: 'Warranty & Support',
                desc: 'Comprehensive warranty coverage and after-sales support for all products',
                icon: '🛡️'
              },
              {
                title: 'Quick Delivery',
                desc: 'Fast and reliable delivery across India with real-time tracking',
                icon: '🚚'
              },
              {
                title: 'Custom Solutions',
                desc: 'Tailored electrical solutions designed to meet your specific requirements',
                icon: '⚙️'
              }
            ].map((item, index) => (
              <ScrollAnimatedSection key={index} animation="scroll-scale-in" delay={index * 100}>
                <div className="group p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl hover:border-red-600/50 transition-all hover:shadow-lg hover:shadow-red-900/30 hover:scale-105 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection animation="scroll-slide-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-red-600">Products</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our range of premium electrical equipment designed for reliability and performance
            </p>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ScrollAnimatedSection key={product.id} animation="scroll-scale-in" delay={index * 150}>
                <ProductCard product={product} />
              </ScrollAnimatedSection>
            ))}
          </div>

           <ScrollAnimatedSection animation="scroll-fade-in" delay={400} className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600/10 border border-red-600/30 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all group"
            >
              <span className="font-semibold">View All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <ScrollAnimatedSection animation="scroll-slide-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We <span className="text-red-600">Serve</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trusted by leading companies across various sectors
            </p>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Manufacturing',
              'Construction',
              'Healthcare',
              'Hospitality',
              'Retail',
              'Education',
              'Agriculture',
              'Transportation'
            ].map((industry, index) => (
              <ScrollAnimatedSection key={index} animation="scroll-scale-in" delay={index * 80}>
                <div className="group p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl hover:border-red-600/50 transition-all text-center hover:scale-105">
                  <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-600/20 transition-all">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-white font-semibold">{industry}</h3>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black border-y border-red-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <ScrollAnimatedSection animation="scroll-slide-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Power Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get in touch with our experts for customized electrical solutions
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-2xl shadow-red-900/50"
            >
              <span className="font-semibold">Request a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  );
}
