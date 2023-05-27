import style from './landingPage.module.scss';
import Wave from '@/assets/icons/wave';
import Navbar from './components/navbar/navbar';
import Hero from './sections/hero/hero';
import DiagnosticErrors from './sections/diagnosticErrors/diagnosticErrors';
import About from './sections/about/about';
import Footer from './sections/footer/footer';

export default function LandingPage() {
  return (
    <div className={style.container}>
      <Wave />
      <Navbar />
      <Hero />
      <DiagnosticErrors />
      <About />
      <Footer />
    </div>
  );
}
