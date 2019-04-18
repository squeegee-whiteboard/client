import React from 'react';
import './accountfield.css';
import PropTypes from 'prop-types';
import { changeUser } from '../api';
import M from '../../node_modules/materialize-css/dist/js/materialize.min';

class AccountField extends React.Component {
  constructor(props) {
    super(props);
    const { val } = this.props;
    this.state = {
      currentVal: val,
      resetVal: val,
      active: false,
    };

    this.toggleActivity = this.toggleActivity.bind(this);
    this.updateVal = this.updateVal.bind(this);
    this.changeUserInfo = this.changeUserInfo.bind(this);
  }

  toggleActivity() {
    // Sets the field to be uneditable, and resets the text to be the original value
    const { active, resetVal } = this.state;
    this.setState({ active: !active, currentVal: resetVal });
  }

  updateVal(e) {
    const { active } = this.state;
    if (active) {
      this.setState({ currentVal: e.target.value });
    }
  }

  async changeUserInfo(e) {
    e.preventDefault(); // Prevents navigation away from page.
    const { currentVal } = this.state;
    const { name } = this.props;
    let result;
    if (name === 'email') {
      result = await changeUser.email(localStorage.getItem('JWT'), currentVal);
    } else if (name === 'username') {
      result = await changeUser.username(localStorage.getItem('JWT'), currentVal);
    }

    if (!result.success) {
      M.toast({ html: `Error changing ${name}: ${result.message}` });
      return;
    }

    M.toast({ html: `Successfully update ${name}` });
    this.setState({ active: false, currentVal, resetVal: currentVal });
  }

  render() {
    const { currentVal, active } = this.state;
    const {
      displayname, name, type, icon,
    } = this.props;
    return (
      <form className="account-change-form" id={`new_${name}_form`} onSubmit={this.changeUserInfo} acceptCharset="UTF-8">
        <div className="icon-label">
          <i className="material-icons">{icon}</i>
          <span className="field-header">{`${displayname}:`}</span>
          {/* Only render "Edit" link if the field's inactive. */}
          {!active && <button className="waves-effect waves-light btn-small float-right blue" type="button" onClick={this.toggleActivity}>Edit</button>}
        </div>
        <input type={type} name={name} id={`${name}_box`} value={currentVal} onChange={this.updateVal} disabled={!active} required />
        {/* Only render buttons if the field's inactive. */}
        {active
            && (
            <div className="button-pair">
              <button type="submit" className="waves-effect waves-light btn-small float-right btn-paired">Update</button>
              <button type="button" className="waves-effect waves-light btn-small float-right red" onClick={this.toggleActivity}>Cancel</button>
            </div>
            )
        }
      </form>
    );
  }
}

AccountField.propTypes = {
  type: PropTypes.string.isRequired,
  displayname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default AccountField;
