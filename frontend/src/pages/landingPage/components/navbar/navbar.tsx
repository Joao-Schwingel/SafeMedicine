import Logo from '@/assets/icons/logo';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.center}></div>
      <div className={styles.right}></div>
    </div>
  );
}
