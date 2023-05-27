import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import { SymptomsPage } from './pages/symptomsPage/symptomsPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/sintomas' component={SymptomsPage} />
        <Route path='/diagnostico' component={undefined} />
        <Route path='/resposta' component={undefined} />
      </Switch>
    </BrowserRouter>
  );
}
