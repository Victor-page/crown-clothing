import { Component } from 'react';
import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions.js';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

const INITIAL_STATE = { email: '', password: '' };

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: { email, password },
      props: { emailSignInStart },
    } = this;
    emailSignInStart(email, password);
    this.setState(INITIAL_STATE);
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  render() {
    const {
      handleSubmit,
      handleChange,
      props: { googleSignInStart },
      state: { email, password },
    } = this;

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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
