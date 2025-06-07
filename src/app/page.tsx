import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Platform from './components/Platform';
import About from './components/About';
import { StatsSection } from '../components/AnimatedCounter';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="servicios">
          <Services />
        </section>
        <section id="plataforma">
          <Platform />
        </section>
        <StatsSection />
        <section id="about">
          <About />
        </section>
        <section id="testimonios">
          <Partnerships />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </div>
    </div>
  );
}
