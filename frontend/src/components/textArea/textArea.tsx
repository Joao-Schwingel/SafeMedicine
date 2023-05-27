import Textarea from '@mui/joy/Textarea';
import styles from './textArea.module.scss';

export const TextArea = () => {
  return (
    <div className={styles.wrapper}>
      <Textarea
        style={{ height: '280px', background: '#fff' }}
        name='Soft'
        placeholder='Type in here…'
        variant='soft'
      />
    </div>
  );
};
