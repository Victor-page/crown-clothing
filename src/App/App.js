import React from 'react';
import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';

import {
  auth,
  createUserProfileDocument,
  db,
} from '../firebase/firebase.utils';

import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { default as CheckoutPage } from '../pages/checkout/checkout.container';

import { default as Header } from '../components/header/header.container';

class App extends Component {
  unsubscribeFromAuth = () => null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        return setCurrentUser(userAuth);
      }

      const userRef = await createUserProfileDocument(userAuth);
      const { id } = userRef;

      onSnapshot(doc(db, 'users', id), (doc) => {
        const user = { id, ...doc.data() };
        setCurrentUser(user);
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    const renderSignInAndSignUpPage = () =>
      currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route component={ShopPage} path="/shop" />
          <Route component={CheckoutPage} exact path="/checkout" />
          <Route exact render={renderSignInAndSignUpPage} path="/signin" />
        </Switch>
      </div>
    );
  }
}

export default App;
