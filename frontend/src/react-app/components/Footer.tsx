import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Property Sales',
    'Investment Consulting',
    'Property Management',
    'Legal Documentation',
    'Mortgage Solutions',
    'After-Sales Support'
  ];

  const propertyTypes = [
    'Luxury Villas',
    'Penthouses',
    'Apartments',
    'Commercial Properties',
    'Investment Properties',
    'Off-Plan Properties'
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="https://mocha-cdn.com/01999a3b-70af-7067-b844-df0195d9ae07/465889928_426530636946501_7422564998101757670_n_1.jpg" 
                alt="WM Real Estate" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-bold text-lg">WM Real Estate</h3>
                <p className="text-gray-400 text-xs">Dubai Premium Properties</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for luxury real estate in Dubai. We connect discerning clients with exceptional properties and provide comprehensive real estate solutions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Ramallah, Al Masyoun, Near to Al Masyoun School</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+970 595 390 378</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">support@wmrealestate.online</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Property Types</h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type}>
                  <span className="text-gray-300 text-sm">{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for the latest property updates and market insights.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
                />
                <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="lg:text-right">
              <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4 lg:justify-end">
                <a 
                  href="#" 
                  className="bg-gray-900 hover:bg-red-500 text-gray-300 hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-900 hover:bg-red-500 text-gray-300 hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-900 hover:bg-red-500 text-gray-300 hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-900 hover:bg-red-500 text-gray-300 hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} WM Real Estate. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
