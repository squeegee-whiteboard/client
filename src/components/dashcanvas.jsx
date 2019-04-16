import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import PropTypes from 'prop-types';
import BoardModal from './boardModal';
import ShareModal from './shareModal';
import { changeBoard } from '../api';
import './dashcanvas.css';


class DashCanvas extends React.Component {
  constructor(props) {
    super(props);

    const { title } = this.props;
    this.state = {
      existent: true,
      title,
    };

    this.renameBoard = this.renameBoard.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
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

  async deleteBoard() {
    const { boardId } = this.props;
    const deleteResult = await changeBoard.deleteBoard(localStorage.getItem('JWT'), boardId);

    if (!deleteResult.success) {
      // TODO: error handling
      console.log(`error deleting board: ${deleteResult.message}`);
      return;
    }

    const { socket } = this.props;
    socket.emit('change_board');
    this.setState({ existent: false });
  }

  render() {
    const { existent, title } = this.state;
    const { boardId } = this.props;
    if (!existent) return null;
    return (
      <div className="card">
        <div className="card-content">
          <Link className="whitespace" to={`/whiteboard/${boardId}`} />
          <div className="card-title grey-text text-darken-4 center" id="board-name-title">
            <Link className="whitespace" to={`/whiteboard/${boardId}`}>
              {title}
            </Link>
            <i className="material-icons activator right more-options-icon">more_vert</i>
          </div>
        </div>
        <div className="card-reveal">
          <div className="menu-wrapper">
            <div className="holder" />
            <div className="card-title white-text">
              <i className="material-icons right" id="close">close</i>
            </div>
            <span>
              <BoardModal
                submitFunction={this.renameBoard}
                boardId={boardId}
                button={(
                  <div className="option">
                    <span className="option-contents">
                      <Icon left>edit</Icon>
                      <p>Rename</p>
                    </span>
                  </div>
                )}
              />
              <ShareModal
                button={(
                  <div className="option">
                    <span className="option-contents">
                      <Icon left>share</Icon>
                      <p>Share</p>
                    </span>
                  </div>
                )}
                boardId={boardId}
              />
              {/* TODO: better accessibility */}
              {/* eslint-disable jsx-a11y/click-events-have-key-events,
                    jsx-a11y/no-static-element-interactions */}
              <div className="option" onClick={this.deleteBoard}>
                {/* eslint-enable jsx-a11y/click-events-have-key-events,
                      jsx-a11y/no-static-element-interactions */}
                <span className="option-contents">
                  <Icon left>delete</Icon>
                  <p>Delete</p>
                </span>
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
