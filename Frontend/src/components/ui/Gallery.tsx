const galleryImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Modern Architecture',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Luxury Interiors',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Infinity Pools',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Designer Living',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Grand Estates',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Elegant Details',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-luxury-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm tracking-widest font-medium uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Our Luxury Collection
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated showcase of extraordinary properties and impeccable design
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative h-80 overflow-hidden cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-2xl font-serif font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.title}
                </h3>
              </div>
              <div className="absolute inset-0 border-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
