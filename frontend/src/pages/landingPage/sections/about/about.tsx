import style from './about.module.scss';
import photo from '@/assets/img/about.png';
import languageValues from '@/utils/language';

export default function About() {
  return (
    <div className={style.root}>
      <img src={photo} alt='about' />
      <div className={style.wrapper}>
        <h1>{languageValues.about.title}</h1>
        <p>{languageValues.about.label}</p>
      </div>
    </div>
  );
}
