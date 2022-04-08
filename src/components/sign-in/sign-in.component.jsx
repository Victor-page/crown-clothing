import { Component } from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

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
    const { email, password } = this.state;

    signInWithEmailAndPassword(auth, email, password)
      .catch(console.log)
      .finally(() => this.setState({ email: '', password: '' }));
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  handleSignInWithGoogle = () =>
    signInWithPopup(auth, provider).catch(console.log);

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
            <CustomButton
              type="button"
              onClick={handleSignInWithGoogle}
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
