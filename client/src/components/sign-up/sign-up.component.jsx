import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { SignUpContainer } from './sign-up.styles';

const INITIAL_FORM_STATE = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [{ displayName, email, password, confirmPassword }, setCredentials] =
    useState(INITIAL_FORM_STATE);
  const dispatch = useDispatch();

  const signUpStartHandler = (email, password, displayName) =>
    dispatch(signUpStart(email, password, displayName));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("passwords don't match");
    }

    signUpStartHandler(email, password, displayName);
    setCredentials(INITIAL_FORM_STATE);
  };

  const handleChange = ({ target: { name, value } }) =>
    setCredentials((credentials) => ({ ...credentials, [name]: value }));

  return (
    <SignUpContainer>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
