import React from 'react';
import PropTypes from 'prop-types';
import { Preloader } from 'react-materialize';
import io from 'socket.io-client';
import Board from '../components/board';
import Toolbox from '../components/toolbox';
import apiConfig from '../../config/apiConfig';
import './whiteboard.css';

// TODO: loading board workflow
// 1. Check if member of board, if yes continue to board
// 2. If not member of board, try to add self to member of board, if success continue to
//    board
// 3. If failed to add member of board, redirect to dashboard with board does not exist
//    error
class Whiteboard extends React.Component {
  constructor(props) {
    super(props);

    // Show a preloader until we're connected to the socket
    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id: boardId } } } = this.props;

    // After mounting, connect to the server socket
    this.socket = io(`${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/board`);
    this.socket.on('connect', () => {
      this.socket.emit('boardId', boardId);
      this.setState({ mounted: true });
    });
  }

  componentWillUnmount() {
    // When unmounting, disconnect from the server socket
    this.socket.disconnect();
  }

  render() {
    const { mounted } = this.state;
    return (mounted ? (
      <div className="whiteboard">
        <Toolbox socket={this.socket} />
        <Board socket={this.socket} />
      </div>
    ) : (
      <div className="whiteboard-preload">
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
};

export default Whiteboard;
