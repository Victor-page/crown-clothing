import { useEffect, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const checkUserSessionHandler = () => dispatch(checkUserSession());

  const preservedCheckUserSession = useCallback(checkUserSessionHandler, [
    dispatch,
  ]);

  useEffect(() => {
    preservedCheckUserSession();
  }, [preservedCheckUserSession]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact component={HomePage} path="/crwn-clothing" />
        <Route component={ShopPage} path="/shop" />
        <Route component={CheckoutPage} exact path="/checkout" />
        <Route
          exact
          render={() =>
            currentUser ? (
              <Redirect to="/crwn-clothing" />
            ) : (
              <SignInAndSignUpPage />
            )
          }
          path="/signin"
        />
      </Switch>
    </>
  );
};

export default App;
