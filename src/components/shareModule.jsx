/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './dashaddnew.css';
import { Modal, Button } from 'react-materialize';
// import { changeBoard } from '../api';
// import { withRouter } from 'react-router';


class ShareModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, url: '' };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.setState({
      url: `${window.location.protocol}://${window.location.host}/#/whiteboard/`,
    });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <Modal
        open={this.state.show}
        options={{ onCloseEnd: this.handleClose }}
        header="Copy this shareable link"
        modal-footer="confirm"
        trigger={this.props.button}
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
        <Link to={`/whiteboard/${this.props.boardId}`}>
          {this.state.url + this.props.boardId}
        </Link>
      </Modal>

    );
  }
}
export default ShareModule;
