import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Icon } from 'react-materialize';
import PropTypes from 'prop-types';
import BoardModal from './boardModal';
import ShareModal from './shareModal';
import { changeBoard } from '../api';
import './dashcanvas.css';
import M from '../../node_modules/materialize-css/dist/js/materialize.min';

class DashCanvas extends React.Component {
  constructor(props) {
    super(props);

    const { title } = this.props;
    this.state = {
      title,
    };

    this.closeButton = React.createRef();

    this.renameBoard = this.renameBoard.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
  }

  async renameBoard(newTitle) {
    const { boardId } = this.props;
    const changeResult = await changeBoard.name(localStorage.getItem('JWT'), newTitle, boardId);

    if (!changeResult.success) {
      M.toast({ html: `Error renaming board: ${changeResult.message}` });
      return;
    }

    this.setState({ title: newTitle });
    const { socket } = this.props;
    socket.emit('change_board');

    // Close the card reveal
    this.closeButton.click();
  }

  async deleteBoard() {
    const { boardId, removeBoard } = this.props;
    const deleteResult = await changeBoard.deleteBoard(localStorage.getItem('JWT'), boardId);

    if (!deleteResult.success) {
      M.toast({ html: `Error deleting board: ${deleteResult.message}` });
      return;
    }

    const { socket } = this.props;
    socket.emit('change_board');
    removeBoard(boardId);
  }

  render() {
    const { title } = this.state;
    const { boardId } = this.props;
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
              <i ref={(i) => { this.closeButton = i; }} className="material-icons right close-button">close</i>
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
              <Modal
                options={{ dismissable: false }}
                header="Delete a board"
                trigger={(
                  <div className="option">
                    <span className="option-contents">
                      <Icon left>delete</Icon>
                      <p>Delete</p>
                    </span>
                  </div>
                )}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    this.deleteBoard();
                  }
                }}
                actions={(
                  <div>
                    <Button flat modal="close" waves="light" className="transparent" onClick={this.deleteBoard}>
                      <Icon modalicon>
                        check
                      </Icon>
                    </Button>
                    <Button flat modal="close" waves="light" className="transparent">
                      <i className="material-icons modalicon">
                        close
                      </i>
                    </Button>
                  </div>
                )}
              >
                {`Are you sure you want to delete the board '${title}'?`}
              </Modal>
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
  removeBoard: PropTypes.func.isRequired,
};

export default DashCanvas;
