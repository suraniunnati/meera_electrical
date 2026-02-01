import { Award, Users, Zap, TrendingUp } from 'lucide-react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4 animate-slide-up">
              About <span className="text-red-600">Meera Electrical</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-slide-up delay-200">
              Leading the way in electrical solutions since 1995
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '5000+', label: 'Happy Clients' },
              { number: '500+', label: 'Products' },
              { number: '100%', label: 'Quality Assured' }
            ].map((stat, index) => (
               <ScrollAnimatedSection key={index} animation="scroll-scale-in" delay={index * 100}>
                <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl hover:border-red-600/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimatedSection animation="scroll-slide-right">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-red-600">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Founded in 1995, Meera Electrical has grown from a small local distributor to one of the most trusted names in industrial electrical equipment across the nation.
                </p>
                <p>
                  Our commitment to quality, reliability, and customer service has remained unwavering throughout our journey. We partner with leading manufacturers worldwide to bring you the best electrical machines and solutions.
                </p>
                <p>
                  Today, we serve thousands of clients across various industries, from manufacturing plants to commercial establishments, delivering excellence in every project.
                </p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="scroll-slide-left" className="relative">
              <div className="absolute -inset-4 bg-red-600/20 rounded-2xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1581092918484-8313e1b2e0b7?w=800&q=80"
                alt="Electrical Equipment"
                className="relative rounded-2xl shadow-2xl border border-red-900/30 hover:scale-105 transition-transform duration-500"
              />
           </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <ScrollAnimatedSection animation="scroll-slide-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-red-600">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that drive everything we do
            </p>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality First',
                desc: 'We never compromise on the quality of our products and services'
              },
              {
                icon: Users,
                title: 'Customer Focus',
                desc: 'Your success is our success, and we go the extra mile'
              },
              {
                icon: Zap,
                title: 'Innovation',
                desc: 'Constantly evolving to bring you the latest technologies'
              },
              {
                icon: TrendingUp,
                title: 'Integrity',
                desc: 'Honest business practices and transparent communication'
              }
            ].map((value, index) => (
              <ScrollAnimatedSection key={index} animation="scroll-scale-in" delay={index * 100}>
                <div className="group p-8 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl hover:border-red-600/50 transition-all hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-2 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimatedSection animation="scroll-slide-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-red-600">Us?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              With decades of experience, extensive product knowledge, and a dedicated support team, we're your ideal partner for all electrical equipment needs. From selection to installation support, we're with you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-red-600/10 border border-red-600/30 rounded-lg text-red-500 font-medium">
                ISO Certified
              </div>
              <div className="px-6 py-3 bg-red-600/10 border border-red-600/30 rounded-lg text-red-500 font-medium">
                Expert Consultation
              </div>
              <div className="px-6 py-3 bg-red-600/10 border border-red-600/30 rounded-lg text-red-500 font-medium">
                Warranty Support
              </div>
              <div className="px-6 py-3 bg-red-600/10 border border-red-600/30 rounded-lg text-red-500 font-medium">
                Fast Delivery
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  );
}
