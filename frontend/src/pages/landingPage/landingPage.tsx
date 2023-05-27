import style from './landingPage.module.scss';
import Wave from '@/assets/icons/wave';
import Navbar from './components/navbar/navbar';
import Hero from './sections/hero/hero';
import DiagnosticErrors from './sections/diagnosticErrors/diagnosticErrors';

export default function LandingPage() {
  return (
    <div className={style.container}>
      <Wave />
      <Navbar />
      <Hero />
      <DiagnosticErrors />
    </div>
  );
}
