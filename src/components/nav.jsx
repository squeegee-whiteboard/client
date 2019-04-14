import React from 'react';
import './nav.css';
import { Dropdown, Divider } from 'react-materialize';
import {
  Route,
  Link,
} from 'react-router-dom';
import Share from './share';

function Nav() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo left" id="logo" to="/dashboard">Squeegee</Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Route path="/whiteboard/:id" component={Share} />
            </li>
            <li>
              <Dropdown trigger={<i className="large material-icons" id="person-icon">person</i>}>
                <Link className="settings" to="/account">
                  <i className="material-icons">settings</i>
                  My Account
                </Link>
                <Divider />
                <Link className="logout" to="/login">
                  <i className="material-icons">exit_to_app</i>
                  Logout
                </Link>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Nav;
