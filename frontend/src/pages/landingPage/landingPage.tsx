import style from './landingPage.module.scss';
import Wave from '@/assets/icons/wave';
import Navbar from './components/navbar/navbar';

export default function LandingPage() {
  return (
    <div className={style.container}>
      <Wave />
      <Navbar />
    </div>
  );
}
