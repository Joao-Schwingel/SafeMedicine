import { ConsultContext } from '@/contexts/consult/ConsultContext';
import { ConsultState } from '@/contexts/consult/ConsultReducer';
import {
  Breadcrumbs,
  Button,
  CircularProgress,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../card/card';
import styles from './layout.module.scss';

interface Props {
  buttonClick: () => void;
  k: keyof ConsultState['values'];
  buttonLabel: string;
  icon?: JSX.Element;
  label: string;
  breadcrumb: {
    label: string;
    link?: string;
  }[];
}

export default function Layout(props: Props) {
  const history = useHistory();
  const {
    dispatch,
    state: { loading, values },
  } = useContext(ConsultContext);

  return (
    <div className={styles.root}>
      <Breadcrumbs>
        {props.breadcrumb.map((item, index) => {
          return index === props.breadcrumb.length - 1 ? (
            <Typography color='black' key={index}>
              {item.label}
            </Typography>
          ) : (
            <Link
              key={index}
              underline='hover'
              color='primary'
              onClick={() => history.push(item.link ?? '')}
            >
              {item.label}
            </Link>
          );
        })}
      </Breadcrumbs>
      <Card>
        <div>{props.icon}</div>
        <div>{props.label}</div>
        <TextField
          fullWidth
          multiline
          placeholder='Digite aqui...'
          rows={5}
          maxRows={5}
          inputProps={{ maxLength: 500 }}
          value={values[props.k]}
          onChange={(e) => {
            dispatch({
              type: 'setValues',
              payload: { [props.k]: e.target.value },
            });
          }}
        />
        <Button
          style={{ alignSelf: 'flex-end' }}
          variant='contained'
          onClick={props.buttonClick}
          disabled={loading || !values[props.k].length}
        >
          {loading ? <CircularProgress size={20} /> : props.buttonLabel}
        </Button>
      </Card>
    </div>
  );
}
