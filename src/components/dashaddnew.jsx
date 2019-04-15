/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './dashaddnew.css';
import { Modal, Button } from 'react-materialize';
import { withRouter } from 'react-router';
import { changeBoard } from '../api';
import BoardModule from "./boardModule";


class DashAddNew extends React.Component {
  constructor(props) {
    super(props);
    this.createBoard = this.createBoard.bind(this);

    const triggerButton = (
      <Button
        className="btn-floating btn-large waves-effect waves-light"
        style={{ margin: 0 }}
      >
        {' '}
        <i className="material-icons">
              add
        </i>
      </Button>
    );

    this.state = {
      theModal: <BoardModule submitFunction={this.createBoard} button={triggerButton} board_id="0" />,
    };
  }

  createBoard(value) {
    const { history } = this.props;
    changeBoard.create(localStorage.getItem('JWT'), value).then((result) => {
      history.push(`/whiteboard/${result.board_id}/`);
    });
    const { socket } = this.props;
    socket.emit('change_board');
  };

  render() {
    return (
      <div className="card medium">
        <div className="card-content-add-new">
          {/* <div className="whitespace"> */}
          {/* <div className="btn-wrapper"> */}
          {this.state.theModal}
          {/* </div> */}
          {/* </div> */}
          {/* <span className="card-title bottom center grey-text text-ligten-4"> */}
          {/* Add a New Board */}
          {/* </span> */}
        </div>
      </div>
    );
  }
}
export default withRouter(DashAddNew);
