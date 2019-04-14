import React from 'react';
// import { DrawingTool, EraserTool } from './tools';
// import { DrawingSettings, EraserSettings } from './tool_settings';
import './accountfield.css';
import PropTypes from 'prop-types';
import auth from '../api/auth';

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

  render() {
    const { currentVal, active } = this.state;
    const {
      displayname, name, type, icon,
    } = this.props;
    return (
      <form className="account-change-form" id={`new_${name}_form`} action={`/changeUser/${name}`} acceptCharset="UTF-8" method="patch">
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
