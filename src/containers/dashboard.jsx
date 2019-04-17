import React from 'react';
import io from 'socket.io-client';
import { Preloader } from 'react-materialize';
import DashCanvas from '../components/dashcanvas';
import DashAddNew from '../components/dashaddnew';
import apiConfig from '../../config/apiConfig';
import './dashboard.css';
import M from '../../node_modules/materialize-css/dist/js/materialize.min';

import { boardInfo } from '../api';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      boards: [],
      mounted: false,
    };

    this.updateBoards = this.updateBoards.bind(this);
    this.removeBoard = this.removeBoard.bind(this);
  }

  componentDidMount() {
    this.updateBoards();

    // After mounting, connect to the server socket
    this.socket = io(`${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/dash`, {
      path: `${apiConfig.EXT}/socket.io`,
    });
    this.socket.on('connect', () => {
      this.socket.on('refresh_boards', this.updateBoards);
      this.setState({ mounted: true });
    });
  }

  componentWillUnmount() {
    // When unmounting, disconnect from the server socket
    if (this.socket !== undefined) {
      this.socket.disconnect();
    }
  }

  removeBoard(boardId) {
    const { boards } = this.state;

    // Don't mutate the state, make a copy of the array
    const newBoards = boards.slice();

    // Find and remove the board from the new board list
    const index = newBoards.find(board => board.board_id === boardId);
    newBoards.splice(index, 1);

    // Update the state
    this.setState({ boards: newBoards });
  }

  async updateBoards() {
    const memberResult = await boardInfo.member(localStorage.getItem('JWT'));

    if (!memberResult.success) {
      M.toast({ html: `Error getting board list: ${memberResult.message}` });
      return;
    }

    this.setState({ boards: memberResult.boards });
  }

  render() {
    const { boards, mounted } = this.state;
    const boardList = boards.map(b => (
      <div className="col s12 m6 l4" key={b.board_name + b.board_id}>
        <DashCanvas
          socket={this.socket}
          boardId={b.board_id}
          title={b.board_name}
          preview={b.board_preview}
          removeBoard={this.removeBoard}
        />
      </div>
    ));
    return (
      <div className="dashboard">
        {(mounted ? (
          <>
            <h5>Your Whiteboards</h5>
            <div className="row">
              <div className="col s12 m6 l4">
                <DashAddNew socket={this.socket} />
              </div>
              {boardList}
            </div>
          </>
        ) : (
          <div className="centered-preload dashboard-preload">
            <Preloader size="big" flashing />
          </div>
        ))}
      </div>
    );
  }
}

export default Dashboard;
