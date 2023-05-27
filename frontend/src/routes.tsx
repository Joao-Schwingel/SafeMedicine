import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ConsultProvider from './contexts/consult/ConsultContext';
import DiagnosysPage from './pages/diagnosticPage/diagnosticPage';
import LandingPage from './pages/landingPage/landingPage';
import ResponsePage from './pages/responsePage/ResponsePage';
import SymptomsPage from './pages/symptomsPage/symptomsPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <ConsultProvider>
          <Route path='/sintomas' exact component={SymptomsPage} />
          <Route path='/diagnostico' exact component={DiagnosysPage} />
          <Route path='/resposta' component={ResponsePage} />
        </ConsultProvider>
      </Switch>
    </BrowserRouter>
  );
}
