import React from 'react';
import '../index.css';
import '../materialize.min.css';

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="index.html" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="index.html">Something</a></li>
          <li><a href="index.html">Something 2</a></li>
          <li><a href="index.html">Another thing</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
