import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Platform from './components/Platform';
import About from './components/About';
import Services from './components/Services';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Platform />
        <About />
        <Services />
        <Partnerships />
        <Contact />
      </div>
    </div>
  );
}
