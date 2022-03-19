import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';

import { auth, createUserProfileDocument, db } from './firebase/firebase.utils';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = () => null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        return this.setState({ currentUser: userAuth });
      }

      const userRef = await createUserProfileDocument(userAuth);
      const { id } = userRef;

      onSnapshot(doc(db, 'users', id), (doc) =>
        this.setState({ currentUser: { id, ...doc.data() } })
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route component={ShopPage} path="/shop" />
          <Route component={SignInAndSignUpPage} path="/signin" />
        </Switch>
      </div>
    );
  }
}

export default App;
