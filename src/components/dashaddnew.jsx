/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function DashAddNew() {
  return (
    <div className="card medium">
      <div className="card-image">
        <svg width="100%" height="100%">
          <rect x="0" y="0" />
        </svg>
        <p className="center-align">
          <a className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">add</i></a>
        </p>
        <svg width="100%" height="80%">
          <rect x="0" y="0" />
        </svg>
      </div>
      <div className="card-content">
        <span className="card-title bottom center grey-text text-ligten-4">Add a New Board</span>
      </div>
    </div>
  );
}

export default DashAddNew;
