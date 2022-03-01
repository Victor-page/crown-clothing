import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact component={HomePage} path="/" />
      <Route component={ShopPage} path="/shop" />
      <Route component={SignInAndSignUpPage} path="/signin" />
    </Switch>
  </div>
);

export default App;
