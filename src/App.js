import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument, db } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import Theme from './Theme/theme.component';

class App extends Component {
  unsubscribeFromAuth = () => null;

  componentDidMount() {
    const observer = async (userAuth) => {
      const { setCurrentUser } = this.props;

      if (!userAuth) {
        return setCurrentUser(userAuth);
      }

      const userRef = await createUserProfileDocument(userAuth);
      const { id } = userRef;
      onSnapshot(doc(db, 'users', id), (document) =>
        setCurrentUser({ id, ...document.data() })
      );
    };

    this.unsubscribeFromAuth = auth.onAuthStateChanged(observer, alert);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <Theme>
        <Header />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
