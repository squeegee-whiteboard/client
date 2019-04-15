import React from 'react';
import PropTypes from 'prop-types';

import '../index.css';

import './nav.css';
import { Dropdown, Divider } from 'react-materialize';
import {
  Route,
  Link,
} from 'react-router-dom';
import Share from './share';

const logoutFunction = () => {
  console.log('removing token');
  localStorage.removeItem('JWT');
  return true;
};

const accountItem = () => (
  <a href="/#/account">
    <i className="material-icons">settings</i>
    {'My Account'}
  </a>
);

const dashboardItem = () => (
  <a href="/#/dashboard">
    <i className="material-icons">dashboard</i>
    {'My Boards'}
  </a>
);

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.chooseComponent = this.chooseComponent.bind(this);
  }

  chooseComponent() {
    let retItem;
    const { location } = this.props;
    const { pathname } = location;
    if (pathname.toLowerCase().endsWith('account') || pathname.toLowerCase().endsWith('account/')) {
      retItem = dashboardItem();
    } else if (pathname.toLowerCase().endsWith('dashboard') || pathname.toLowerCase().endsWith('dashboard/')) {
      retItem = accountItem();
    } else {
      retItem = (
        <React.Fragment>
          { accountItem() }
          <Divider />
          { dashboardItem() }
        </React.Fragment>
      );
    }
    return retItem;
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo" id="logo">Squeegee</a>
            <ul id="nav-mobile" className="right">
              <li>
                <Route path="/whiteboard/:id" component={Share} />
              </li>
              <li>
                <Dropdown trigger={<i className="large material-icons" id="person-icon">person</i>}>
                  { this.chooseComponent() }
                  <Divider />
                  <a href="../#/login" onClick={logoutFunction}>
                    <i className="material-icons">exit_to_app</i>
                    {'Logout'}
                  </a>
                </Dropdown>
              </li>
            </ul>
          </div>
        </nav>

      </>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Nav;
