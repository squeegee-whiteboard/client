import React from 'react';
import '../index.css';
import './nav.css';
import { Dropdown, Divider } from 'react-materialize';
import {
  Route,
} from 'react-router-dom';
import Share from './share';

function Nav() {
  return (
    <>
      <nav>
        <div className="nav-wrapper black">
          <a href="" className="brand-logo" id="logo">Squeegee</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Route path="/whiteboard/:id" component={Share} />
            </li>
            <li>
              <Dropdown trigger={<i className="large material-icons" id="person-icon">person</i>}>
                <a href="#">
                  <i className="material-icons">settings</i>
                  My Account
                </a>
                <Divider />
                <a href="#">
                  <i className="material-icons">exit_to_app</i>
                  Logout
                </a>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Nav;
