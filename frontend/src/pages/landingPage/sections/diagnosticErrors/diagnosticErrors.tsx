import style from './diagnosticErrors.module.scss';
import languageValues from '@/utils/language';
import CardError from '../../components/cardError/cardError';
import File from '@/assets/icons/file';
import Clock from '@/assets/icons/clock';
import Brain from '@/assets/icons/brain';
import Face from '@/assets/icons/face';

export default function DiagnosticErrors() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Clock />;
      case 'brain':
        return <Brain />;
      case 'file':
        return <File />;
      case 'face':
        return <Face />;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2 id='erros-diagnostico'>{languageValues.diagnosticErrors.title}</h2>
        <p className={style.subtitle}>
          {languageValues.diagnosticErrors.label}
        </p>
        <div className={style.cardcontainer}>
          {languageValues.diagnosticErrors.cards.map((item, index) => {
            return (
              <CardError
                text={item.text}
                title={item.title}
                key={index}
                icon={getIcon(item.icon)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
