import { Calendar, Phone, Mail } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-luxury-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark via-luxury-dark/95 to-luxury-dark" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm tracking-widest font-medium uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
              Begin Your Luxury Journey
            </h2>
            <p className="text-gray-400 text-lg">
              Schedule a private consultation with our luxury property experts
            </p>
          </div>

          <div className="bg-luxury-gray/30 backdrop-blur-sm border border-white/10 p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-luxury-black border border-white/10 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    placeholder="John Anderson"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-luxury-black border border-white/10 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-luxury-black border border-white/10 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Preferred Contact Time
                  </label>
                  <select className="w-full px-4 py-3 bg-luxury-black border border-white/10 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300">
                    <option>Morning (9AM - 12PM)</option>
                    <option>Afternoon (12PM - 5PM)</option>
                    <option>Evening (5PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-luxury-black border border-white/10 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your property needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gold-500 text-luxury-black font-semibold hover:bg-gold-400 transition-all duration-300 text-lg hover:shadow-xl hover:shadow-gold-500/20 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Schedule Consultation
              </button>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-luxury-gray/20 backdrop-blur-sm border border-white/5">
              <Phone className="w-8 h-8 text-gold-500 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Call Us</h3>
              <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="text-center p-6 bg-luxury-gray/20 backdrop-blur-sm border border-white/5">
              <Mail className="w-8 h-8 text-gold-500 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Email Us</h3>
              <p className="text-gray-400 text-sm">info@luxeestates.com</p>
            </div>
            <div className="text-center p-6 bg-luxury-gray/20 backdrop-blur-sm border border-white/5">
              <Calendar className="w-8 h-8 text-gold-500 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Visit Us</h3>
              <p className="text-gray-400 text-sm">By Appointment Only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
