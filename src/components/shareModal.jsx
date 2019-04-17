import React from 'react';
import PropTypes from 'prop-types';
import './dashaddnew.css';
import { Modal, Button, Icon } from 'react-materialize';
import M from '../../node_modules/materialize-css/dist/js/materialize.min';

class ShareModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      target: '',
      readyForCopy: false,
    };

    this.copyTarget = this.copyTarget.bind(this);
  }

  componentDidMount() {
    const { boardId } = this.props;
    this.setState({
      target: `${window.location.protocol}//${window.location.host}/#/whiteboard/${boardId}`,
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
    const { button } = this.props;
    const { target, readyForCopy } = this.state;
    return (
      <Modal
        header="Copy this shareable link"
        modal-footer="confirm"
        trigger={button}
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

ShareModal.propTypes = {
  button: PropTypes.element.isRequired,
  boardId: PropTypes.string.isRequired,
};

export default ShareModal;
