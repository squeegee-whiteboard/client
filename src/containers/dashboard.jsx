import React from 'react';
import DashCanvas from '../components/dashcanvas';
import DashAddNew from '../components/dashaddnew';
import './dashboard.css';
import { boardInfo, changeBoard } from '../api';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false,
      message: '',
      boards: [],
    };
  }

  componentDidMount() {
    boardInfo.member(localStorage.getItem('JWT')).then((result) => {
      const {
        success, message, boards,
      } = result;
      this.setState({
        success, message, boards,
      });
    });
  }

  render() {
    const { boards } = this.state;
    const boardList = boards.map(b => (
      <div className="col s12 m6 l4" key={b.board_id}>
        <DashCanvas title={b.board_name} />
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
