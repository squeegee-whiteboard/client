import React from 'react';
import './errorpage.css';
import lookingForMe from './404.png';

function Errorpage() {
  return (
    <div className="container notfound">
      <h1>404 Not Found</h1>
      <h2>Were you looking for me?</h2>
      <img alt="garbunjin" src={lookingForMe} />
    </div>
  );
}
export default Errorpage;
