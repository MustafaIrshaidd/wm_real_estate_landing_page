import { Award, Users, Building, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Building,
      title: "Luxury Properties",
      description: "Exclusive access to Dubai's most prestigious residential and commercial properties."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional consultants with deep knowledge of Dubai's real estate market."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Over 15 years of successful property transactions and satisfied clients."
    },
    {
      icon: TrendingUp,
      title: "Investment Guidance",
      description: "Strategic advice to maximize your property investment returns in Dubai."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dubai's Premier 
                <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Real Estate Partner
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                WM Real Estate has been at the forefront of Dubai's dynamic property market for over 15 years. 
                We specialize in connecting discerning clients with exceptional residential and commercial properties 
                that define luxury living and smart investments in the UAE.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Why Choose WM Real Estate?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Comprehensive market analysis and property valuation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">End-to-end support from viewing to closing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Exclusive access to off-market properties</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Multilingual team serving international clients</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <feature.icon className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
