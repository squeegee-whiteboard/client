import React from 'react';
import DashCanvas from '../components/dashcanvas';
import DashAddNew from '../components/dashaddnew';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col m4">
          <DashAddNew />
        </div>
        <div className="col m4">
          <DashCanvas />
        </div>
        <div className="col m4">
          <DashCanvas />
        </div>
      </div>
      <div className="row">
        <div className="col m4">
          <DashCanvas />
        </div>
        <div className="col m4">
          <DashCanvas />
        </div>
        <div className="col m4">
          <DashCanvas />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
