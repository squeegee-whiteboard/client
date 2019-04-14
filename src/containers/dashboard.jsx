import React from 'react';
import DashCanvas from '../components/dashcanvas';
import DashAddNew from '../components/dashaddnew';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <h5>Your Whiteboards</h5>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <DashAddNew />
        </div>
        <div className="col s12 m4">
          <DashCanvas />
        </div>
        <div className="col s12 m4">
          <DashCanvas />
        </div>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <DashCanvas />
        </div>
        <div className="col s12 m4">
          <DashCanvas />
        </div>
        <div className="col s12 m4">
          <DashCanvas />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
