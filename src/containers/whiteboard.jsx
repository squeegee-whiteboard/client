import React from 'react';
import PropTypes from 'prop-types';
import { Preloader, Button, Icon } from 'react-materialize';
import io from 'socket.io-client';
import Board from '../components/board';
import Toolbox from '../components/toolbox';
import apiConfig from '../../config/apiConfig';
import { boardInfo, changeBoard } from '../api';
import './whiteboard.css';
import M from '../../node_modules/materialize-css/dist/js/materialize.min';

class Whiteboard extends React.Component {
  constructor(props) {
    super(props);

    // Show a preloader until we're connected to the socket
    this.state = {
      mounted: false,
      mobile: false,
      mobileRotate: false,
    };

    this.toggleMobile = this.toggleMobile.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id: boardId } } } = this.props;
    const token = localStorage.getItem('JWT');

    const memberResult = await boardInfo.isMember(token, boardId);

    if (!memberResult.success || !memberResult.is_member) {
      const addMemberResult = await changeBoard.addMember(token, boardId);

      if (!addMemberResult.success) {
        M.toast({ html: `Error trying to add board: ${addMemberResult.message}` });
        const { history } = this.props;

        // Stop here so we don't try to connect to the socket
        history.push('/dashboard');
        return;
      }
    }

    // After mounting, connect to the server socket
    this.socket = io(`${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/board`, {
      path: `${apiConfig.EXT}/socket.io`,
    });
    this.socket.on('connect', () => {
      this.socket.emit('boardId', boardId);
      this.setState({ mounted: true });
    });
  }

  componentWillUnmount() {
    // When unmounting, disconnect from the server socket
    if (this.socket !== undefined) {
      this.socket.disconnect();
    }
  }

  toggleMobile() {
    const { mobile } = this.state;
    if (mobile) {
      this.setState({
        mobile: !mobile,
        mobileRotate: false,
      });
    } else {
      this.setState({
        mobile: !mobile,
        mobileRotate: true,
      });
    }
  }

  render() {
    const { mounted, mobileRotate, mobile } = this.state;
    return (mounted ? (
      <div className="whiteboard">
        <Button className="toggle-mobile" type="button" onClick={this.toggleMobile}>
          <Icon className={mobileRotate ? 'rotated-icon' : ''}>arrow_forward</Icon>
        </Button>
        <Toolbox socket={this.socket} mobile={mobile} />
        <Board socket={this.socket} />
      </div>
    ) : (
      <div className="centered-preload">
        <Preloader size="big" flashing />
      </div>
    ));
  }
}

Whiteboard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default Whiteboard;
