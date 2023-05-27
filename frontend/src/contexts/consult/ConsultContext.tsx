import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import ConsultReducer, {
  ConsultActions,
  ConsultState,
  INITIAL_STATE,
} from './ConsultReducer';

interface IConsultContext {
  state: ConsultState;
  dispatch: Dispatch<ConsultActions>;
  sendConsult: () => Promise<string>;
}
export const ConsultContext = createContext<IConsultContext>({
  dispatch: () => null,
  state: {
    loading: false,
    values: {
      diagnostic: '',
      symptoms: '',
      response: '',
    },
  },
  sendConsult: Promise.reject,
});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(ConsultReducer, INITIAL_STATE);

  const sendConsult = async () => {
    return 'verídico';
  };

  return (
    <ConsultContext.Provider value={{ state, dispatch, sendConsult }}>
      {children}
    </ConsultContext.Provider>
  );
}
