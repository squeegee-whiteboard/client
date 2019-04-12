import React from 'react';
import '../index.css';
import './nav.css';

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="index.html" className="brand-logo">
          <i className="material-icons">wifi</i>
          Squeegee
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="index.html">Something</a></li>
          <li><a href="index.html">Something 2</a></li>
          <li>
            <a href="index.html">
              <i className="material-icons">person</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
