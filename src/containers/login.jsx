import React from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Button } from 'react-materialize';
import { auth } from '../api';
import './login-signup.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
      password,
      // formValid,
    } = this.state;

    // if (!formValid) {
    //   return;
    // }

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
      this.history.push('/dashboard');
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="page-container">
        <div className="login">
          <h1>Squeegee</h1>
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
            Login
            </Button>
            <Link className="btn" to="/signup">
            Create New Account
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
