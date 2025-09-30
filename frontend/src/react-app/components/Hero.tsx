import { ArrowRight, MapPin, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
          alt="Dubai Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Main Content */}
        <div className="space-y-8">
          <div className="flex items-center justify-center space-x-2 text-red-400">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Dubai, UAE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Premium Real Estate
            <br />
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-red-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover Dubai's finest properties with WM Real Estate. 
            Your trusted partner for luxury residential and commercial investments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-500/25">
              <span className="flex items-center space-x-2">
                <span>View Properties</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="border-2 border-white/20 hover:border-red-400 text-white hover:text-red-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">500+</div>
              <div className="text-gray-400">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center flex items-center justify-center space-x-1">
              <div className="text-3xl font-bold text-red-400">5.0</div>
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <div className="text-gray-400">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
