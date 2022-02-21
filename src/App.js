import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const App = () => (
  <div>
    <Switch>
      <Route exact component={HomePage} path="/" />
      <Route component={HatsPage} path="/hats" />
    </Switch>
  </div>
);

export default App;
