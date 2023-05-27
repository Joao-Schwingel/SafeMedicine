import style from './hero.module.scss';
import languageValues from '@/utils/language';

export default function Hero() {
  return (
    <div className={style.container}>
      <h1>{languageValues.hero.title}</h1>
      <p>{languageValues.hero.subtitle}</p>
    </div>
  );
}
