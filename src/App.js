import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';

import { auth, createUserProfileDocument, db } from './firebase/firebase.utils';
import CurrentUserContext from './contexts/current-user/current-user.context';

import Theme from './Theme/Theme.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

class App extends Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = () => null;

  observer = async (userAuth) => {
    if (!userAuth) {
      return this.setState({ currentUser: userAuth });
    }

    const userRef = await createUserProfileDocument(userAuth);
    const { id } = userRef;
    onSnapshot(doc(db, 'users', id), (doc) =>
      this.setState({ currentUser: { id, ...doc.data() } })
    );
  };

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(this.observer);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Theme>
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route component={ShopPage} path="/shop" />
          <Route component={CheckoutPage} exact path="/checkout" />
          <Route
            exact
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
            path="/signin"
          />
        </Switch>
      </Theme>
    );
  }
}

export default App;
