import React from 'react';
import './errorpage.css';
import lookingForMe from './404.png';

function Errorpage(props) {
  return (
    <div className="container notfound">
      <h1>404 Not Found</h1>
      <h2>Were you looking for me?</h2>
      <div
        className="notfound-img"
        style={{ backgroundImage: `url(${lookingForMe})` }}
      />
    </div>
  );
}
export default Errorpage;
