import { useState } from 'react';
import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions.js';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

const INITIAL_FORM_STATE = { email: '', password: '' };

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [credentials, setCredentials] = useState(INITIAL_FORM_STATE);

  const { email, password } = credentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
    setCredentials(INITIAL_FORM_STATE);
  };

  const handleChange = ({ target: { value, name } }) =>
    setCredentials((credentials) => ({ ...credentials, [name]: value }));

  return (
    <SignInContainer>
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

        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
