import { Component } from 'react';
import { connect } from 'react-redux';

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

class SignUp extends Component {
  constructor() {
    super();

    this.state = INITIAL_FORM_STATE;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: { displayName, email, password, confirmPassword },
      props: { signUpStart },
    } = this;

    if (password !== confirmPassword) {
      return alert("passwords don't match");
    }

    signUpStart(email, password, displayName);
    this.setState(INITIAL_FORM_STATE);
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const {
      handleSubmit,
      handleChange,
      state: { displayName, email, password, confirmPassword },
    } = this;

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
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart(email, password, displayName)),
});

export default connect(null, mapDispatchToProps)(SignUp);
