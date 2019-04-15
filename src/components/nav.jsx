import React from 'react';
import PropTypes from 'prop-types';
import './nav.css';
import {
  Navbar,
  NavItem,
  Icon,
} from 'react-materialize';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Share from './share';
import Logo from '../../logo.svg';

const logoutFunction = () => {
  localStorage.removeItem('JWT');
  return true;
};

function Nav() {
  return (
    <Navbar
      brand={(
        <Link
          style={{
            padding: '0 15px',
            display: 'flex',
            alignItems: 'center',
          }}
          to="/"
        >
          <img className="logo-img" src={Logo} alt="Squeegee Logo" />
          <span className="logo-text">Squeegee</span>
        </Link>
      )}
      alignLinks="right"
    >
      <Route
        path="/whiteboard/:id"
        component={() => (
          <Share />
        )}
      />
      <Switch>
        <Route
          path="/dashboard"
          component={() => null}
        />
        <Route
          component={() => (
            <Link to="/dashboard" className="nav-item">
              <div className="navitem-content">
                <Icon>dashboard</Icon>
                My Boards
              </div>
            </Link>
          )}
        />
      </Switch>
      <Switch>
        <Route
          path="/account"
          component={() => null}
        />
        <Route
          component={() => (
            <Link to="/account" className="nav-item">
              <div className="navitem-content">
                <Icon>settings</Icon>
                My Account
              </div>
            </Link>
          )}
        />
      </Switch>
      <Link to="/login" onClick={logoutFunction} className="nav-item">
        <div className="navitem-content">
          <i className="material-icons">exit_to_app</i>
          Logout
        </div>
      </Link>
    </Navbar>
  );
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Nav;
