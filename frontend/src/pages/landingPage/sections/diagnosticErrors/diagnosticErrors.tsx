import style from './diagnosticErrors.module.scss';
import languageValues from '@/utils/language';
import CardError from '../../components/cardError/cardError';

export default function DiagnosticErrors() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2>{languageValues.diagnosticErrors.title}</h2>
        <p className={style.subtitle}>
          {languageValues.diagnosticErrors.label}
        </p>
        <div className={style.cardcontainer}>
          {languageValues.diagnosticErrors.cards.map((item, index) => {
            return (
              <CardError text={item.text} title={item.title} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
