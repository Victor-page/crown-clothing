import { Component } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { auth, provider } from '../../firebase/firebase.utils.js';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  handleSignInWithGoogle = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  render() {
    const {
      handleSubmit,
      handleChange,
      handleSignInWithGoogle,
      state: { email, password },
    } = this;

    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            value={email}
            required
            handleChange={handleChange}
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            id="password"
            value={password}
            required
            handleChange={handleChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={handleSignInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
