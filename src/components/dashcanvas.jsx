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
        <span className="card-title grey-text text-darken-4">
            Card Title
          <i className="material-icons right">close</i>
        </span>
        <p>Here is some more information</p>
      </div>
    </div>
  );
}
export default DashCanvas;
