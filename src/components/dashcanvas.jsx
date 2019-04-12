import React from 'react';

function DashCanvas() {
  return (
    <div className="card">
      <div className="card-content">
        <div>
          <svg>
            <rect x="0" y="0" width="0" height="0" />
          </svg>
          <svg>
            <rect x="0" y="0" width="0" height="0" />
          </svg>
        </div>
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
