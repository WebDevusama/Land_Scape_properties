import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Luxe<span className="text-gold-500">Estates</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Premier luxury property management for discerning clients seeking
              unparalleled elegance, service, and investment excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300"
              >
                <Twitter size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300"
              >
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#properties"
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Beverly Hills, CA</li>
              <li>+1 (555) 123-4567</li>
              <li>info@luxeestates.com</li>
              <li className="text-sm pt-2">Mon - Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 LuxeEstates. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-gold-500 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gold-500 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gold-500 transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
