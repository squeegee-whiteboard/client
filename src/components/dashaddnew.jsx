import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-materialize';
import { withRouter } from 'react-router-dom';
import { changeBoard } from '../api';
import BoardModal from './boardModal';
import './dashaddnew.css';
import M from '../../node_modules/materialize-css/dist/js/materialize.min';

class DashAddNew extends React.Component {
  constructor(props) {
    super(props);

    this.createBoard = this.createBoard.bind(this);
  }

  async createBoard(value) {
    const { history } = this.props;
    const result = await changeBoard.create(localStorage.getItem('JWT'), value);

    if (!result.success) {
      M.toast({ html: `Error creating new board: ${result.message}` });
      return;
    }

    const { socket } = this.props;
    socket.emit('change_board');
    history.push(`/whiteboard/${result.board_id}/`);
  }

  render() {
    return (
      <div className="card medium">
        <div className="card-content-add-new">
          <BoardModal
            submitFunction={this.createBoard}
            button={(
              <Button
                className="btn-floating btn-large waves-effect waves-light"
                style={{ margin: 0 }}
              >
                <Icon>add</Icon>
              </Button>
            )}
            boardId="0"
          />
        </div>
      </div>
    );
  }
}

DashAddNew.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(DashAddNew);
