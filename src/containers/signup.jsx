import React from 'react';
import './login-signup.css';

function Signup() {
  return (
    <div className="Signup">
      {/* <i class="fas fa-arrow-alt-circle-left"></i> */}
      <h1>Squeegee</h1>
      <div className="form-inline">
        <div className="form-group" id="signup-form">
          <input
            className="form-control"
            type="text"
            placeholder="&#xf0e0;   Email"
          />
        </div>
        <div className="form-group" id="signup-form">
          <input
            className="form-control"
            type="text"
            placeholder="&#xf2bd;   Username"
          />
        </div>
        <div className="form-group" id="signup-form">
          <input
            className="form-control"
            type="password"
            placeholder="&#xf084;   Password"
          />
        </div>
        <div className="form-group" id="signup-form">
          <input
            className="form-control"
            type="password"
            placeholder="&#xf14a;   Confirm Password"
          />
        </div>
        <button
          className="btn btn-primary"
          id="signup-button"
          type="button"
        >
        Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;
