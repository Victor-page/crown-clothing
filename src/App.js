import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument, db } from './firebase/firebase.utils';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { setCurrentUser } from './redux/user/user.actions';

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

      onSnapshot(doc(db, 'users', id), (doc) =>
        setCurrentUser({ id, ...doc.data() })
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route component={ShopPage} path="/shop" />
          <Route
            exact
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
            path="/signin"
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { currentUser } }) => ({ currentUser });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
