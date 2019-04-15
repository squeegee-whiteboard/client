import React from 'react';
import PropTypes from 'prop-types';
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
      formErrors: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { password, confirm } = this.state;

    this.setState({
      [event.target.name]: event.target.value,
    });

    if (event.target.name == 'password') password = event.target.value;
    else if (event.target.name == 'confirm') confirm = event.target.value;
    if (password !== confirm) {
      document.getElementById('confirm_password_box').setCustomValidity("Passwords don't match!");
      document.getElementById('confirm_password_box').classList.add('invalid');
    } else {
      document.getElementById('confirm_password_box').classList.remove('invalid');
      document.getElementById('confirm_password_box').setCustomValidity('');
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      email,
      username,
      password,
      // formValid,
    } = this.state;

    let errorMsg = '';
    if (!email || !password || !username) {
      errorMsg = 'All fields must be filled in!';
    }

    this.setState({ formErrors: errorMsg });
    if (errorMsg) {
      return;
    }
    console.log("Get here");

    auth.register(email, username, password).then((result) => {
      console.log("This finishes...");
      const { success } = result;

      if (!success) {
        // TODO: error
        console.log('error signing up');
        console.log(result.error);
        return;
      }

      const { token } = result;
      console.log("Setting token...");
      localStorage.setItem('JWT', token);


      // TODO: feedback
      console.log('successful signup');
      const { history } = this.props;
      history.push('/dashboard');
    });
  }

  render() {
    const {
      email,
      username,
      password,
      confirm,
      formErrors,
      loggedIn,
      // formErrors,
      // passwordValid,
      // formValid,
    } = this.state;
    // TODO: More validation
    if (loggedIn) return <Redirect to="/" />;
    return (
        <div className="page-container">
      <div className="Signup">
        <h1>Squeegee</h1>
        {!!formErrors && <span className="login-signup-error">{formErrors}</span>}
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group" id="signup-form">
            <TextInput
                style=
                    {{
                      color : "white"
                    }}
              id="email_box"
              label="Email"
              icon="email"
              name="email"
              email
              validate
              error="Invalid Email"
              value={email}
              onChange={this.handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group" id="signup-form">
            <TextInput
                style=
                    {{
                      color : "white"
                    }}
              id="username_box"
              label="Username"
              icon="account_circle"
              name="username"
              value={username}
              onChange={this.handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group" id="signup-form">
            <TextInput
                style=
                    {{
                      color : "white"
                    }}
              id="password_box"
              password
              label="Password"
              icon="vpn_key"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group" id="signup-form">
            <TextInput
                style=
                    {{
                      color : "white"
                    }}
              id="confirm_password_box"
              password
              label="Confirm Password"
              icon="check_box"
              name="confirm"
              value={confirm}
              onChange={this.handleChange}
              required
              aria-required="true"
            />
          </div>
          <Button
            type="submit"
            waves="light"
          >
            {'Create Account'}
          </Button>
        </form>
      </div>
        </div>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Signup;
