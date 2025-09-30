import { Phone, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img 
              src="https://mocha-cdn.com/01999a3b-70af-7067-b844-df0195d9ae07/465889928_426530636946501_7422564998101757670_n_1.jpg" 
              alt="WM Real Estate" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-white font-bold text-xl">WM Real Estate</h1>
              <p className="text-gray-400 text-xs">Dubai Premium Properties</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-red-400 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-red-400 transition-colors">About</a>
            <a href="#properties" className="text-white hover:text-red-400 transition-colors">Properties</a>
            <a href="#services" className="text-white hover:text-red-400 transition-colors">Services</a>
            <a href="#contact" className="text-white hover:text-red-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="tel:+971-xxx-xxxx" className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Call Now</span>
            </a>
            <a href="mailto:info@wmrealestate.ae" className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
