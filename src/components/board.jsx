import React from 'react';
import PropTypes from 'prop-types';
import './board.css';
import {
  paper,
  Path,
  project,
} from 'paper';

// Compare two arrays and return true if all of their elements are equal according to the
// given comparison function.
// Params:
//   a1 First array
//   a2 Second array
//   comp Comparison function that should take 2 arguments and return true if they are equal
//     and false otherwise
function arrayComp(a1, a2, comp) {
  // Early return if lengths don't match
  if (a1.length !== a2.length) {
    return false;
  }

  // Loop through and compare each element
  for (let i = 0; i < a1.length; i += 1) {
    if (!comp(a1[i], a2[i])) {
      return false;
    }
  }

  // No elements were different, so the arrays match
  return true;
}

// Add a new path from the given JSON to the paper project
function newPath(pathJSON) {
  const layer = project.activeLayer;
  const path = Path.importJSON(pathJSON);
  layer.addChild(path);
}

// Remove the given paths (in JSON form) from the project
function removePaths(pathJSONList) {
  const layer = project.activeLayer;

  // convert the list of JSON paths to a list of Path objects
  const pathList = pathJSONList.map(path => Path.importJSON(path));

  // Remove each from the layer
  pathList.forEach((receivedPath) => {
    const toRemove = layer.getItem({
      class: Path,
      match: localPath => arrayComp(
        receivedPath.segments,
        localPath.segments,
        (seg1, seg2) => {
          // We need to cast the point coordinates to integers and compare them directly
          // since the floating points get truncated when being transferred from user to
          // user, so the provided comparison function doesn't work
          const point1 = seg1.point;
          const point2 = seg2.point;
          const p1x = parseInt(point1.x, 10);
          const p1y = parseInt(point1.y, 10);
          const p2x = parseInt(point2.x, 10);
          const p2y = parseInt(point2.y, 10);
          return (p1x === p2x) && (p1y === p2y);
        },
      ),
    });

    // Remove the object if it exists
    if (toRemove !== null) {
      toRemove.remove();
    }
  });
}

// Loads the given JSON dump into the current paper scope
function loadBoard(boardJSON) {
  project.clear();
  project.importJSON(boardJSON);
}

class Board extends React.Component {
  componentDidMount() {
    paper.setup('whiteboard');

    // Add socket events
    const { socket } = this.props;
    socket.on('new_path', newPath);
    socket.on('removed_paths', removePaths);
    socket.on('board_dump', loadBoard);
  }

  render() {
    return (
      <div className="board">
        <canvas id="whiteboard" resize="true" />
      </div>
    );
  }
}

Board.propTypes = {
  socket: PropTypes.shape({
    on: PropTypes.func,
  }).isRequired,
};

export default Board;
