import React from 'react';
import AccountField from '../components/accountfield';
import './account.css';
import '../components/accountfield.css';
import { changeUser } from '../api';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      oldPassword: '',
      oldPassword2: '',
      newPassword: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  handleInputChange(e) {
    let { oldPassword, oldPassword2 } = this.state;
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name == 'oldPassword') oldPassword = e.target.value;
    else if (e.target.name == 'oldPassword2') oldPassword2 = e.target.value;
    if (oldPassword !== oldPassword2) {
      document.getElementById('old_password_2_box').setCustomValidity("Passwords don't match!");
      document.getElementById('old_password_2_box').classList.add('invalid');
    } else {
      document.getElementById('old_password_2_box').classList.remove('invalid');
      document.getElementById('old_password_2_box').setCustomValidity('');
    }
  }

  changePassword(e) {
    e.preventDefault(); // Prevents navigation away from page.
    const { oldPassword, newPassword } = this.state;
    changeUser.password(localStorage.getItem('JWT'), oldPassword, newPassword).then((result) => {console.log(result);});
  }

  render() {
    return (
      <div className="account">
        <h5>Your Account</h5>
        <div className="row">
          <div className="col m12 s12">
            <AccountField type="text" displayname="Username" name="username" val="getFromServerPls" icon="person" />
          </div>
          <div className="col m12 s12">
            <AccountField type="email" displayname="Email" name="email" val="getFromServerPls" icon="email" />
          </div>
          <div className="col m12 s12">
            <form className="account-change-form" id="new_password_form" onSubmit={this.changePassword} acceptCharset="UTF-8">
              <div className="icon-label">
                <i className="material-icons">lock</i>
                <span className="field-header">Change Password:</span>
              </div>
              <hr />
              <label id="oldpasswordlabel" htmlFor="old_password_box">
                <span>Old password:</span>
                <input type="password" name="oldPassword" id="old_password_box" onChange={this.handleInputChange} required />
              </label>
              <label id="confirmpasswordlabel" htmlFor="old_password_2_box">
                <span>Confirm old password:</span>
                <input type="password" name="oldPassword2" id="old_password_2_box" onChange={this.handleInputChange} required />
              </label>
              <label id="newpasswordlabel" htmlFor="new_password_box">
                <span>New password:</span>
                <input type="password" name="newPassword" id="new_password_box" onChange={this.handleInputChange} required />
              </label>
              <button type="submit" className="waves-effect waves-light btn-small float-right">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
