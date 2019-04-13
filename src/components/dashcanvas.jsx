import React from 'react';
import './dashcanvas.css';

function DashCanvas() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="whitespace" />
        <span className="card-title activator grey-text text-darken-4 center">
            Board Name
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <div className="menu-wrapper">
          <div className="holder" />
          <div className="card-title white-text">
            <i className="material-icons right" id="close">close</i>
          </div>
          <span>
            <div className="option">
              <i className="material-icons left">edit</i>
              <p>Rename</p>
            </div>
            <div className="option">
              <i className="material-icons left">share</i>
              <p>Share</p>
            </div>
            <div className="option">
              <i className="material-icons left">delete</i>
              <p>Delete</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
export default DashCanvas;
