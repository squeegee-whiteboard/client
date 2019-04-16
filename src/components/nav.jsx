import React from 'react';
import PropTypes from 'prop-types';
import './nav.css';
import {
  Navbar,
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

const allButPath = (path, component) => (
  <Switch>
    <Route
      path={path}
      component={() => null}
    />
    <Route
      component={() => component}
    />
  </Switch>
);

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
      {allButPath('/dashboard', (
        <Link to="/dashboard" className="nav-item sidenav-close">
          <div className="navitem-content">
            <Icon left>dashboard</Icon>
            My Boards
          </div>
        </Link>
      ))}
      {allButPath('/account', (
        <Link to="/account" className="nav-item sidenav-close">
          <div className="navitem-content">
            <Icon left>settings</Icon>
            My Account
          </div>
        </Link>
      ))}
      <Link to="/login" onClick={logoutFunction} className="nav-item sidenav-close">
        <div className="navitem-content">
          <Icon left>exit_to_app</Icon>
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
