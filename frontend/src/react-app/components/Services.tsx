import { Home, TrendingUp, FileText, Key, Calculator, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Property Sales",
      description: "Expert guidance through buying and selling residential and commercial properties in Dubai's prime locations.",
      features: ["Market Analysis", "Property Valuation", "Negotiation Support"]
    },
    {
      icon: TrendingUp,
      title: "Investment Consulting",
      description: "Strategic investment advice to maximize your returns in Dubai's dynamic real estate market.",
      features: ["ROI Analysis", "Market Trends", "Portfolio Management"]
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Complete assistance with all legal paperwork, contracts, and regulatory compliance.",
      features: ["Contract Review", "Due Diligence", "Legal Compliance"]
    },
    {
      icon: Key,
      title: "Property Management",
      description: "Comprehensive property management services for landlords and property investors.",
      features: ["Tenant Management", "Maintenance", "Rental Collection"]
    },
    {
      icon: Calculator,
      title: "Mortgage Solutions",
      description: "Access to competitive mortgage rates and financing options through our banking partners.",
      features: ["Loan Processing", "Rate Comparison", "Financial Planning"]
    },
    {
      icon: Shield,
      title: "After-Sales Support",
      description: "Ongoing support and services even after your property transaction is complete.",
      features: ["Handover Assistance", "Utility Connections", "Community Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our 
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your property needs in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="mt-6 text-red-400 hover:text-red-300 font-medium text-sm transition-colors group">
                  Learn More 
                  <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl border border-red-400/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact our expert team today for a personalized consultation and discover how we can help you achieve your real estate goals in Dubai.
          </p>
          <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
