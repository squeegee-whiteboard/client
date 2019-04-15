import React from 'react';
import AccountField from '../components/accountfield';
import { changeUser } from '../api';
import './account.css';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      oldPassword: '',
      newPassword: '',
      newPassword2: '',
      username: '',
      email: '',
      infoSuccess: '',
      infoMessage: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  componentDidMount() {
    changeUser.info(localStorage.getItem('JWT')).then((result) => {
      const {
        success, message, username, email,
      } = result;
      this.setState({
        infoSuccess: success, infoMessage: message, username, email,
      });
    });
  }

  handleInputChange(e) {
    let { newPassword, newPassword2 } = this.state;
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === 'newPassword') newPassword = e.target.value;
    else if (e.target.name === 'newPassword2') newPassword2 = e.target.value;
    if (newPassword !== newPassword2) {
      document.getElementById('new_password_2_box').setCustomValidity("Passwords don't match!");
      document.getElementById('new_password_2_box').classList.add('invalid');
    } else {
      document.getElementById('new_password_2_box').classList.remove('invalid');
      document.getElementById('new_password_2_box').setCustomValidity('');
    }
  }

  changePassword(e) {
    e.preventDefault(); // Prevents navigation away from page.
    const { oldPassword, newPassword } = this.state;
    changeUser.password(localStorage.getItem('JWT'), oldPassword, newPassword).then((result) => { console.log(result); });
  }

  render() {
    const {
      username, email, infoSuccess, infoMessage,
    } = this.state;
    if (infoSuccess) {
      return (
        <div className="account">
          <h5>Your Account</h5>
          <div className="row">
            <div className="col m12 s12">
              <AccountField type="text" displayname="Username" name="username" val={username} icon="person" />
            </div>
            <div className="col m12 s12">
              <AccountField type="email" displayname="Email" name="email" val={email} icon="email" />
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
                <label id="newpasswordlabel" htmlFor="new_password_box">
                  <span>New password:</span>
                  <input type="password" name="newPassword" id="new_password_box" onChange={this.handleInputChange} required />
                </label>
                <label id="confirmpasswordlabel" htmlFor="new_password_2_box">
                  <span>Confirm new password:</span>
                  <input type="password" name="newPassword2" id="new_password_2_box" onChange={this.handleInputChange} required />
                </label>
                <button type="submit" className="waves-effect waves-light btn-small float-right">Update Password</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="account">
        <h1>ERROR!</h1>
        <p>{ infoMessage }</p>
      </div>
    );
  }
}

export default Account;
