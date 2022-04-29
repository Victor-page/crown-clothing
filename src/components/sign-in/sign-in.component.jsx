import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions.js';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

const INITIAL_FORM_STATE = { email: '', password: '' };

const SignIn = () => {
  const [credentials, setCredentials] = useState(INITIAL_FORM_STATE);
  const dispatch = useDispatch();

  const { email, password } = credentials;

  const googleSignInStartHandler = () => dispatch(googleSignInStart());

  const emailSignInStartHandler = (email, password) =>
    dispatch(emailSignInStart(email, password));

  const handleSubmit = (event) => {
    event.preventDefault();
    emailSignInStartHandler(email, password);
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
            onClick={googleSignInStartHandler}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
