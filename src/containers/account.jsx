import React from 'react';
import AccountField from '../components/accountfield';
import './account.css';
import '../components/accountfield.css';

function Account() {
  return (
    <div className="account">
      <h5>Your Account</h5>
      <div className="row">
        <div className="col m12 s12">
          <AccountField type="text" displayname="Username" name="Username" val="getFromServerPls" icon="person" />
        </div>
        <div className="col m12 s12">
          <AccountField type="email" displayname="Email" name="email" val="getFromServerPls" icon="email" />
        </div>
        <div className="col m12 s12">
          <form className="account-change-form" id="new_password_form" action="/changeUser/password" acceptCharset="UTF-8" method="patch">
            <div className="icon-label">
              <i className="material-icons">lock</i>
              <span className="field-header">Change Password:</span>
            </div>
            <hr />
            <label id="oldpasswordlabel" htmlFor="old_password_box">
              <span>Old password:</span>
              <input type="password" name="oldPassword" id="old_password_box" />
            </label>
            <label id="confirmpasswordlabel" htmlFor="old_password_2_box">
              <span>Confirm old password:</span>
              <input type="password" name="oldPassword2" id="old_password_2_box" />
            </label>
            <label id="newpasswordlabel" htmlFor="new_password_box">
              <span>New password:</span>
              <input type="password" name="newPassword" id="new_password_box" />
            </label>
            <button type="submit" className="waves-effect waves-light btn-small float-right">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
