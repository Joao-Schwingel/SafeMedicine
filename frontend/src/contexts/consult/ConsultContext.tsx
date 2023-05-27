import { mockConsult, postConsult } from '@/services/consult';
import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import ConsultReducer, {
  ConsultActions,
  ConsultState,
  INITIAL_STATE,
} from './ConsultReducer';

interface IConsultContext {
  state: ConsultState;
  dispatch: Dispatch<ConsultActions>;
  sendConsult: (mock?: boolean) => Promise<string>;
}
export const ConsultContext = createContext<IConsultContext>({
  dispatch: () => null,
  state: {
    loading: false,
    values: {
      diagnosys: '',
      symptoms: '',
      response: '',
    },
  },
  sendConsult: Promise.reject,
});

export default function ConsultProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(ConsultReducer, INITIAL_STATE);

  const sendConsult = async (mock?: boolean) => {
    dispatch({
      type: 'setLoading',
      payload: true,
    });
    try {
      const req = await (mock
        ? mockConsult(state.values.symptoms, state.values.diagnosys)
        : postConsult(state.values.symptoms, state.values.diagnosys));
      dispatch({
        type: 'setValues',
        payload: { response: req.data },
      });
      return req.data;
    } finally {
      dispatch({
        type: 'setLoading',
        payload: false,
      });
    }
  };

  return (
    <ConsultContext.Provider value={{ state, dispatch, sendConsult }}>
      {children}
    </ConsultContext.Provider>
  );
}
