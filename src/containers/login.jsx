import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TextInput, Button } from 'react-materialize';
import { auth } from '../api';
import './login-signup.css';
import M from '../../node_modules/materialize-css/dist/js/materialize.min';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      formErrors: '',
    };

    // Configure the target from the props
    const { location: { state } } = this.props;
    const { from: target } = state || { from: { pathname: '/dashboard' } };
    this.target = target;

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
        M.toast({ html: `Error logging in: ${result.message}` });
        return;
      }

      const { token } = result;
      localStorage.setItem('JWT', token);

      const { history } = this.props;
      history.push(this.target);
    });
  }

  render() {
    const { email, password, formErrors } = this.state;
    const { location: { state } } = this.props;
    return (
      <div className="page-container login-signup-container">
        <div className="login-signup">
          <h1>Squeegee</h1>
          {!!formErrors && <span className="login-signup-error">{formErrors}</span>}
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <TextInput
                style={{ color: 'white' }}
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
                style={{ color: 'white' }}
                password
                icon="vpn_key"
                label="Password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <Button type="submit" waves="light">
              Login
            </Button>
            <Link
              className="btn account-btn"
              to={{
                pathname: '/signup',
                state,
              }}
            >
              Create New Account
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Login;
