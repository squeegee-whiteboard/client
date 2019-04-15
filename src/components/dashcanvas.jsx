import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BoardModule from './boardModule';

import ShareModule from './shareModule';
import { changeBoard } from '../api';
import './dashcanvas.css';


class DashCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.renameBoard = this.renameBoard.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);

    const renameButton = (
      <div className="option">
        <i className="material-icons left">edit</i>
        <p>Rename</p>
      </div>
    );
    
    const shareButton = (
      <div className="option">
        <i className="material-icons left">share</i>
        <p>Share</p>
      </div>
    );


    const { boardId, title } = this.props;

    this.state = {
      theModal: <BoardModule
        submitFunction={this.renameBoard}
        button={renameButton}
        boardId={boardId}
      />,
      shareModal: <ShareModule
        submitFunction={this.renameBoard}
        button={shareButton}
        boardId={boardId}
      />,

      title,
      existent: true,
    };
  }

  async renameBoard(newTitle) {
    const { boardId } = this.props;
    const changeResult = await changeBoard.name(localStorage.getItem('JWT'), newTitle, boardId);

    if (!changeResult.success) {
      // TODO: error handling
      console.log(`error changing result: ${changeResult.message}`);
      return;
    }

    this.setState({ title: newTitle });
    const { socket } = this.props;
    socket.emit('change_board');
  }

  deleteBoard() {
    this.setState({ existent: false });
    changeBoard.deleteBoard(localStorage.getItem('JWT'), this.props.boardId);
    const { socket } = this.props;
    socket.emit('change_board');
  }

  render() {
    if (!this.state.existent) return null;
    const { boardId } = this.props;
    const { title } = this.state;
    return (
      <div className="card">
        <div className="card-content">
          <Link className="whitespace" to={`/whiteboard/${boardId}`} />
          <span className="card-title grey-text text-darken-4 center" id="board-name-title">
            <Link className="whitespace" to={`/whiteboard/${boardId}`}>
              {title}
            </Link>
            <i className="material-icons activator right more-options-icon">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <div className="menu-wrapper">
            <div className="holder" />
            <div className="card-title white-text">
              <i className="material-icons right" id="close">close</i>
            </div>
            <span>
              {this.state.theModal}
              {this.state.shareModal}
              {/* <div className="option">
                <i className="material-icons left">share</i>
                <p>Share</p>
              </div>
               */}
              <div className="option" onClick={this.deleteBoard}>
                <i className="material-icons left">delete</i>
                <p>Delete</p>
              </div>
            </span>
          </div>
        </div>
      </div>

    );
  }
}

DashCanvas.propTypes = {
  title: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
  }).isRequired,
};

export default DashCanvas;
