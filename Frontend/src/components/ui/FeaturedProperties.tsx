import { MapPin, Bed, Bath, Maximize } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Beverly Hills Modern Estate',
    location: 'Beverly Hills, CA',
    price: '$24,500,000',
    beds: 7,
    baths: 9,
    sqft: '12,500',
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 2,
    title: 'Oceanfront Villa Paradise',
    location: 'Malibu, CA',
    price: '$32,800,000',
    beds: 6,
    baths: 8,
    sqft: '10,200',
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 3,
    title: 'Manhattan Penthouse Suite',
    location: 'New York, NY',
    price: '$45,000,000',
    beds: 5,
    baths: 6,
    sqft: '8,900',
    image:
      'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 bg-luxury-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm tracking-widest font-medium uppercase">
            Exclusive Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Featured Luxury Properties
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handpicked estates representing the pinnacle of luxury living
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group cursor-pointer bg-luxury-gray/50 overflow-hidden backdrop-blur-sm border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-gold-500 text-luxury-black text-sm font-bold">
                    EXCLUSIVE
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gold-500 text-sm mb-3">
                  <MapPin size={16} className="mr-1" />
                  <span>{property.location}</span>
                </div>

                <h3 className="text-2xl font-serif font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">
                  {property.title}
                </h3>

                <p className="text-3xl font-bold text-gold-500 mb-6">
                  {property.price}
                </p>

                <div className="flex items-center gap-6 text-gray-400 text-sm border-t border-white/10 pt-4">
                  <div className="flex items-center">
                    <Bed size={18} className="mr-2" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={18} className="mr-2" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize size={18} className="mr-2" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-gold-500 text-gold-500 font-semibold hover:bg-gold-500 hover:text-luxury-black transition-all duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
