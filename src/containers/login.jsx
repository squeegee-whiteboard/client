import React from 'react';
import {
  Link,
  Redirect,
} from 'react-router-dom'
import { TextInput, Button } from 'react-materialize';
import { auth } from '../api';
import './login-signup.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      formErrors: '',
      loggedIn: false,
      // emailValid: false,
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
    const { email, password } = this.state;
    let errorMsg = '';
    if (!email || !password) {
      errorMsg = 'All fields must be filled in!';
    }
    
    this.setState({ formErrors: errorMsg });
    if (errorMsg) {
      return;
    }

    auth.login(email, password).then((result) => {
      const { success } = result;

      if (!success) {
        // TODO: error
        console.log('error logging in');
        console.log(result.error);
        return;
      }

      const { token } = result;
      localStorage.setItem('JWT', token);

      // TODO: fix this not working
      this.setState({ loggedIn: true });
    });
  }

  render() {
    const { email, password, formErrors, loggedIn } = this.state;
    if (loggedIn) return <Redirect to="/" />;
    return (
      <div className="login">
        <h1>Squeegee</h1>
        {!!formErrors && <span className="login-signup-error">{formErrors}</span>}
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <TextInput
              email
              validate
              icon="email"
              label="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <TextInput
              password
              icon="vpn_key"
              label="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <p>Forgot Password?</p>
          <Button type="submit" waves="light">
            {'Login'}
          </Button>
          <Link className="btn" to="/signup">
            {'Create New Account'}
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
