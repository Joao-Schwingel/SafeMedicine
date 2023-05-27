import style from './landingPage.module.scss';
import WaveHome from '@/assets/img/waveHome';

export default function LandingPage() {
  return (
    <div className={style.container}>
      <WaveHome />
    </div>
  );
}
