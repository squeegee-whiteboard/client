/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './dashaddnew.css';

function DashAddNew() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="whitespace">
          <p className="btn-wrapper">
            <a className="btn-floating btn-large waves-effect waves-light green">
              <i className="material-icons">
                add
              </i>
            </a>
          </p>
        </div>
        <span className="card-title bottom center grey-text text-ligten-4">
            Add a New Board
        </span>
      </div>
    </div>
  );
}

export default DashAddNew;
