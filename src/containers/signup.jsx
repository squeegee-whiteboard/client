import React from 'react';
import { TextInput, Button } from 'react-materialize';
import { auth } from '../api';
import './login-signup.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      confirm: '',
      // formErrors: { email: '', password: '' },
      // emailValid: false,
      // passwordValid: false,
      // formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      email,
      username,
      password,
      // formValid,
    } = this.state;

    // if (!formValid) {
    //   return;
    // }

    auth.register(email, username, password).then((result) => {
      const { success } = result;

      if (!success) {
        // TODO: error
        console.log("error signing up");
        console.log(result.error);
        return;
      }

      const { token } = result;
      localStorage.setItem('JWT', token);

      this.history.push('/dashboard');
    });
  }

  render() {
    const {
      email,
      username,
      password,
      confirm,
      // formErrors,
      // passwordValid,
      // formValid,
    } = this.state;
    // TODO: More validation
    return (
      <div className="Signup">
        <h1>Squeegee</h1>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group" id="signup-form">
            <TextInput
              label="Email"
              icon="email"
              name="email"
              email
              validate
              error="Invalid Email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group" id="signup-form">
            <TextInput
              label="Username"
              icon="account_circle"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group" id="signup-form">
            <TextInput
              password
              label="Password"
              icon="vpn_key"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group" id="signup-form">
            <TextInput
              password
              label="Confirm Password"
              icon="check_box"
              name="confirm"
              value={confirm}
              onChange={this.handleChange}
            />
          </div>
          <Button
            type="submit"
            waves="light"
          >
            Create Account
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
