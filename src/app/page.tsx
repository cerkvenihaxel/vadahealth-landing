import Navbar from './components/Navbar';
import TempHero from './components/TempHero';
import QuienesSomos from './components/QuienesSomos';
import PorQueElegirnos from './components/PorQueElegirnos';
import ProblemSolution from './components/ProblemSolution';
import AIPlatform from './components/AIPlatform';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import DemoInteractiva from './components/DemoInteractiva';
// import UseCases from './components/UseCases';
import NewContact from './components/NewContact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="hero">
          <TempHero />
        </section>
        <section id="quienes-somos">
          <QuienesSomos />
        </section>
        <section id="por-que-elegirnos">
          <PorQueElegirnos />
        </section>
        <section id="problema">
          <ProblemSolution />
        </section>
        <section id="plataforma">
          <AIPlatform />
        </section>
        <section id="beneficios">
          <Benefits />
        </section>
        <section id="como-funciona">
          <HowItWorks />
        </section>
        <section id="demo">
          <DemoInteractiva />
        </section>
        {/* <section id="casos">
          <UseCases />
        </section> */}
        <NewContact />
      </main>
      <Footer />
    </div>
  );
}
