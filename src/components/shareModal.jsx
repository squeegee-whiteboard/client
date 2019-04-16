import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './dashaddnew.css';
import { Modal, Button } from 'react-materialize';

class ShareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '' };
  }

  componentDidMount() {
    this.setState({
      url: `${window.location.protocol}//${window.location.host}/#/whiteboard/`,
    });
  }

  render() {
    const { button, boardId } = this.props;
    const { url } = this.state;
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
        <Link to={`/whiteboard/${boardId}`}>
          {url + boardId}
        </Link>
      </Modal>

    );
  }
}

ShareModal.propTypes = {
  button: PropTypes.element.isRequired,
  boardId: PropTypes.string.isRequired,
};

export default ShareModal;
