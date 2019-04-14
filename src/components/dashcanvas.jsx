import React from 'react';
import './dashcanvas.css';

function DashCanvas() {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4 bottom" id="board-name-title">
            Board Name
          <i className="material-icons right" id="more-options-icon">more_vert</i>
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
