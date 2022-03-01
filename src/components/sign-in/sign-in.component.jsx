import { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

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

  render() {
    const {
      handleSubmit,
      handleChange,
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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
