import React from 'react';
import DashCanvas from '../components/dashcanvas';
import DashAddNew from '../components/dashaddnew';
import './dashboard.css';

import { boardInfo } from '../api';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      boards: [],
    };
  }


  async componentDidMount() {
    const memberResult = await boardInfo.member(localStorage.getItem('JWT'));

    if (!memberResult.success) {
      // TODO: error handling
      console.log(`error getting board list: ${memberResult.message}`);
      return;
    }

    this.setState({ boards: memberResult.boards });
  }

  render() {
    const { boards } = this.state;
    const boardList = boards.map(b => (
      <div className="col s12 m6 l4" key={b.board_id}>

        <DashCanvas boardId={b.board_id} title={b.board_name} />
      </div>
    ));
    return (
      <div className="dashboard">
        <div>
          <h5>Your Whiteboards</h5>
        </div>
        <div className="row">
          <div className="col s12 m6 l4">
            <DashAddNew />
          </div>
          {boardList}
        </div>
      </div>
    );
  }
}

export default Dashboard;
