import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import { SymptomsPage } from './pages/symptomsPage/symptomsPage';
import { DiagnosysPage } from './pages/diagnosysPage/diagnosysPage';
import { FinalPage } from './pages/finalPage/finalPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/sintomas' component={SymptomsPage} />
        <Route path='/diagnostico' component={DiagnosysPage} />
        <Route path='/resposta' component={FinalPage} />
      </Switch>
    </BrowserRouter>
  );
}
