import { ConsultContext } from '@/contexts/consult/ConsultContext';
import { ConsultState } from '@/contexts/consult/ConsultReducer';
import languageValues from '@/utils/language';
import {
  Breadcrumbs,
  Button,
  CircularProgress,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { MouseEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../card/card';
import styles from './layout.module.scss';

interface Props {
  buttonClick?: (evt: MouseEvent<HTMLElement>) => void;
  k: keyof ConsultState['values'];
  buttonLabel?: string;
  icon?: JSX.Element;
  label: string;
  disabled?: boolean;
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
      {props.breadcrumb.length > 0 && (
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
      )}
      <Card>
        <div>{props.icon}</div>
        <div>{props.label}</div>
        <TextField
          fullWidth
          multiline
          placeholder={languageValues.inputs.defPlaceholder}
          rows={5}
          inputProps={{ maxLength: 500 }}
          value={values[props.k]}
          disabled={props.disabled}
          onChange={(e) => {
            dispatch({
              type: 'setValues',
              payload: { [props.k]: e.target.value },
            });
          }}
        />
        {Boolean(props.buttonLabel) && (
          <Button
            style={{ alignSelf: 'flex-end' }}
            variant='contained'
            onClick={props.buttonClick}
            disabled={loading || !values[props.k].length}
          >
            {loading ? <CircularProgress size={20} /> : props.buttonLabel}
          </Button>
        )}
      </Card>
    </div>
  );
}
