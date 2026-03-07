import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black/80" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
            <span className="inline-block px-6 py-2 border border-gold-500/30 bg-gold-500/5 text-gold-400 text-sm tracking-widest font-medium backdrop-blur-sm">
              PREMIUM PROPERTY MANAGEMENT
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
            Luxury Living,
            <br />
            <span className="text-gold-500">Managed Perfectly</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.7s_forwards]">
            Curating extraordinary living experiences for discerning clients
            seeking unparalleled elegance and service
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
            <a
              href="#properties"
              className="px-10 py-4 bg-gold-500 text-luxury-black font-semibold hover:bg-gold-400 transition-all duration-300 text-lg hover:shadow-2xl hover:shadow-gold-500/30 transform hover:-translate-y-1"
            >
              Explore Estates
            </a>
            <button className="px-10 py-4 border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 text-lg backdrop-blur-sm">
              Private Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
