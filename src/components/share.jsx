import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Modal,
  NavItem,
  Icon,
} from 'react-materialize';
import './share.css';
import M from '../../node_modules/materialize-css/dist/js/materialize.min';

class Share extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      target: '',
      readyForCopy: false,
    };

    this.copyInput = React.createRef();
    this.copyTarget = this.copyTarget.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    this.setState({
      target: `${window.location.protocol}//${window.location.host}/#${location.pathname}`,
      readyForCopy: true,
    });
  }

  copyTarget() {
    this.copyInput.select();
    const success = document.execCommand('copy');
    if (success) {
      M.toast({ html: 'Copied link to clipboard' });
    } else {
      M.toast({ html: 'Could not copy link to clipboard' });
    }
  }

  render() {
    const { target, readyForCopy } = this.state;

    return (
      <Modal
        header="Copy This Shareable Link"
        modal-footer="confirm"
        trigger={(
          <NavItem>
            <Icon left>share</Icon>
            Share
          </NavItem>
          )}
        actions={(
          <div>
            <Button flat modal="close" waves="light" className="transparent">
              <i className="material-icons modalicon">
                close
              </i>
            </Button>
          </div>
          )}
      >
        <input ref={(input) => { this.copyInput = input; }} readOnly value={target} />
        <Button disabled={!readyForCopy} onClick={this.copyTarget}>
          <Icon left>file_copy</Icon>
          Copy to Clipboard
        </Button>
      </Modal>
    );
  }
}

Share.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Share);
