/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './dashaddnew.css';

function DashAddNew() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="whitespace">
          <p className="btn-wrapper">
            <a className="btn-floating btn-large waves-effect waves-light green modal-trigger" href="#modal1">
              <i className="material-icons">
                add
              </i>
              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>Modal Header</h4>
                  <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Create</a>
                </div>
              </div>
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
