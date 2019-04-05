import React from 'react';
import './board.css';
import paper from 'paper';

class Board extends React.Component {
  componentDidMount() {
    paper.setup('whiteboard');
  }

  render() {
    return (
      <div className="board">
        <canvas id="whiteboard" resize="true" />
      </div>
    );
  }
}

export default Board;
