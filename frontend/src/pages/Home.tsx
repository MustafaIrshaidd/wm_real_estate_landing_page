import Navbar from '@/react-app/components/Navbar';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Properties from '@/react-app/components/Properties';
import Services from '@/react-app/components/Services';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
