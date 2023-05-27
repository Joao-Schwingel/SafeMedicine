import style from './hero.module.scss';
import languageValues from '@/utils/language';
import HeroIcon from '@/assets/icons/heroIcon';

export default function Hero() {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <h1>{languageValues.hero.title}</h1>
        <p>{languageValues.hero.subtitle}</p>
      </div>
      <HeroIcon />
    </div>
  );
}
