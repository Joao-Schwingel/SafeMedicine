import { ReactNode } from 'react';
import styles from './card.module.scss';

interface Props {
  children: ReactNode;
}

export default function Card(props: Props) {
  return (
    <div className={styles.root}>
      {props.children}
    </div>
  );
}
