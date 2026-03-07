import { Crown, Users, TrendingUp, Lock, Clock, Award } from 'lucide-react';

const services = [
  {
    icon: Lock,
    title: 'Private Listings',
    description:
      'Exclusive access to off-market properties and pre-launch luxury estates.',
  },
  {
    icon: Users,
    title: 'VIP Tenant Management',
    description:
      'White-glove concierge services for discerning tenants and property owners.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description:
      'Strategic guidance for luxury real estate portfolios and asset optimization.',
  },
  {
    icon: Crown,
    title: 'Premium Maintenance',
    description:
      'Around-the-clock estate care with vetted luxury service providers.',
  },
  {
    icon: Clock,
    title: '24/7 Concierge',
    description:
      'Personalized assistance for any request, any time, anywhere.',
  },
  {
    icon: Award,
    title: 'Portfolio Growth',
    description:
      'Curated opportunities to expand your luxury real estate holdings.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-luxury-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm tracking-widest font-medium uppercase">
            Exclusive Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Unparalleled Excellence
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive luxury property management tailored to your unique
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-luxury-gray/30 to-luxury-gray/10 backdrop-blur-sm border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/10 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300">
                <service.icon size={28} className="text-gold-500" />
              </div>

              <h3 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-gold-500 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-gold-500 text-luxury-black font-semibold hover:bg-gold-400 transition-all duration-300 text-lg hover:shadow-xl hover:shadow-gold-500/20 transform hover:-translate-y-1">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
