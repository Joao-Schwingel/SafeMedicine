import style from './cardError.module.scss';

export default function CardError(props: {
  title: string;
  text: string;
  icon: JSX.Element | undefined;
}) {
  return (
    <div className={style.container}>
      <div className={style.imgcontainer}>{props.icon}</div>
      <div className={style.title}>{props.title}</div>
      <div className={style.text}>{props.text}</div>
    </div>
  );
}
