import React from 'react';
import PropTypes from 'prop-types';
import Board from '../components/board';
import Toolbox from '../components/toolbox';
import './whiteboard.css';

function Whiteboard() {
  return (
    <div className="whiteboard">
      <Toolbox />
      <Board />
    </div>
  );
}

Whiteboard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Whiteboard;
