/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-materialize';
import { withRouter } from 'react-router-dom';
import { changeBoard } from '../api';
import BoardModal from './boardModal';
import './dashaddnew.css';


class DashAddNew extends React.Component {
  constructor(props) {
    super(props);

    this.createBoard = this.createBoard.bind(this);
  }

  createBoard(value) {
    const { history } = this.props;
    changeBoard.create(localStorage.getItem('JWT'), value).then((result) => {
      history.push(`/whiteboard/${result.board_id}/`);
    });
    const { socket } = this.props;
    socket.emit('change_board');
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
