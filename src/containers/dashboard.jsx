import React from 'react';
import io from 'socket.io-client';
import { Preloader } from 'react-materialize';
import DashCanvas from '../components/dashcanvas';
import DashAddNew from '../components/dashaddnew';
import apiConfig from '../../config/apiConfig';
import './dashboard.css';
import { boardInfo } from '../api';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      boards: [],
      mounted: false,
    };

    this.updateBoards = this.updateBoards.bind(this);
  }

  componentDidMount() {
    this.updateBoards();

    // After mounting, connect to the server socket
    this.socket = io(`${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/dash`);
    this.socket.on('connect', () => {
      this.socket.on('refresh_boards', this.updateBoards);
      this.setState({ mounted: true });
    });
  }

  async updateBoards() {
    const memberResult = await boardInfo.member(localStorage.getItem('JWT'));

    if (!memberResult.success) {
      // TODO: error handling
      console.log(`error getting board list: ${memberResult.message}`);
      return;
    }

    this.setState({ boards: memberResult.boards });
  }

  render() {
    const { boards, mounted } = this.state;
    const boardList = boards.map(b => (
      <div className="col s12 m6 l4" key={b.board_name}>
        {(mounted ? (
          <DashCanvas socket={this.socket} boardId={b.board_id} title={b.board_name} />
        ) : (
          <Preloader size="big" flashing />
        ))}
      </div>
    ));
    return (
      <div className="dashboard">
        <div>
          <h5>Your Whiteboards</h5>
        </div>
        <div className="row">
          <div className="col s12 m6 l4">
            {(mounted ? (
              <DashAddNew socket={this.socket} />
            ) : (
              <Preloader size="big" flashing />
            ))}
          </div>
          {boardList}
        </div>
      </div>
    );
  }
}

export default Dashboard;
