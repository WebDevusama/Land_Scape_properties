import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alexandra Morrison',
    title: 'Real Estate Investor',
    image:
      'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    content:
      'LuxeEstates transformed my property portfolio with their exceptional management and investment insights. Their attention to detail is unmatched.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'CEO, Tech Ventures',
    image:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    content:
      'The level of service and professionalism exceeded all expectations. They handle everything with grace and efficiency.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophia Laurent',
    title: 'International Client',
    image:
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    content:
      'From private listings to concierge services, LuxeEstates delivers excellence at every touchpoint. Truly world-class.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-luxury-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm tracking-widest font-medium uppercase">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Trusted by the Elite
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from clients who experience luxury living at its finest
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group p-8 bg-gradient-to-br from-luxury-gray/30 to-luxury-gray/10 backdrop-blur-sm border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/10 transform hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold-500/30"
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
