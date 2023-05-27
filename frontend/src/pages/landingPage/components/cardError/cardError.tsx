import style from './cardError.module.scss';

export default function CardError(props: { title: string; text: string }) {
  return (
    <div className={style.container}>
      <div className={style.imgcontainer}></div>
      <div className={style.title}>{props.title}</div>
      <div className={style.text}>{props.text}</div>
    </div>
  );
}
