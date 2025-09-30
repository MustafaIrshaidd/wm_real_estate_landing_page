import { MapPin, Bed, Bath, Square, Eye } from 'lucide-react';

export default function Properties() {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa - Palm Jumeirah",
      price: "AED 25,000,000",
      location: "Palm Jumeirah, Dubai",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      beds: 6,
      baths: 8,
      area: "8,500",
      type: "Villa"
    },
    {
      id: 2,
      title: "Penthouse - Burj Khalifa",
      price: "AED 45,000,000",
      location: "Downtown Dubai",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      beds: 4,
      baths: 5,
      area: "6,200",
      type: "Penthouse"
    },
    {
      id: 3,
      title: "Waterfront Apartment - Dubai Marina",
      price: "AED 3,500,000",
      location: "Dubai Marina",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      beds: 2,
      baths: 3,
      area: "1,800",
      type: "Apartment"
    },
    {
      id: 4,
      title: "Modern Villa - Emirates Hills",
      price: "AED 18,000,000",
      location: "Emirates Hills, Dubai",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      beds: 5,
      baths: 6,
      area: "7,200",
      type: "Villa"
    },
    {
      id: 5,
      title: "Luxury Apartment - Business Bay",
      price: "AED 2,800,000",
      location: "Business Bay, Dubai",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop",
      beds: 3,
      baths: 4,
      area: "2,200",
      type: "Apartment"
    },
    {
      id: 6,
      title: "Beachfront Villa - Jumeirah Beach",
      price: "AED 32,000,000",
      location: "Jumeirah Beach, Dubai",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      beds: 7,
      baths: 9,
      area: "9,800",
      type: "Villa"
    }
  ];

  return (
    <section id="properties" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured 
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"> Properties</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium properties in Dubai's most prestigious locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-red-500 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4" />
                    <span>{property.area} sq ft</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                      {property.price}
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
