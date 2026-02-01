import { Mail, Phone, MapPin } from "lucide-react";
import ScrollAnimatedSection from "../components/ScrollAnimatedSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help you find the perfect electrical solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

          {/* Contact Info */}
          <ScrollAnimatedSection
            animation="scroll-slide-right"
            className="lg:col-span-1 space-y-6"
          >
            {/* Phone */}
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl hover:border-red-600/50 transition-all">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-white font-bold mb-2">Phone</h3>
              <p className="text-gray-400">+91 98765 43210</p>
              <p className="text-gray-400">+91 98765 43211</p>
            </div>

            {/* Email */}
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl hover:border-red-600/50 transition-all">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-white font-bold mb-2">Email</h3>
              <p className="text-gray-400">info@meeraelectrical.com</p>
              <p className="text-gray-400">sales@meeraelectrical.com</p>
            </div>

            {/* Address */}
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl hover:border-red-600/50 transition-all">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-white font-bold mb-2">Address</h3>
              <p className="text-gray-400">
                123 Industrial Estate,<br />
                Sector 5, Mumbai,<br />
                Maharashtra 400001
              </p>
            </div>
          </ScrollAnimatedSection>

          {/* Contact Form */}
          <ScrollAnimatedSection
            animation="scroll-slide-left"
            className="lg:col-span-2"
          >
            <div className="p-8 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-black border border-red-900/30 rounded-lg text-white"
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-black border border-red-900/30 rounded-lg text-white"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-black border border-red-900/30 rounded-lg text-white"
                />

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-black border border-red-900/30 rounded-lg text-white"
                />

                <textarea
                  rows={6}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 bg-black border border-red-900/30 rounded-lg text-white resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollAnimatedSection>
        </div>

        {/* Map */}
        <ScrollAnimatedSection animation="scroll-fade-in">
          <div className="h-96 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">
                Visit Our Showroom
              </h3>
              <p className="text-gray-400">
                123 Industrial Estate, Sector 5, Mumbai
              </p>
            </div>
          </div>
        </ScrollAnimatedSection>

      </div>
    </div>
  );
}
