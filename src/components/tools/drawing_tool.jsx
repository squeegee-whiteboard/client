import React from 'react';
import { Tool, Path } from 'paper';

class DrawingTool extends React.Component {
  constructor() {
    super();

    // Create the drawing tool
    this.tool = new Tool();

    // Start a new path on mouse down
    this.tool.onMouseDown = (event) => {
      this.path = new Path();
      this.path.strokeColor = 'black';
      this.path.strokeWidth = 5;
      this.path.strokeJoin = 'round';
      this.path.strokeCap = 'round';
      this.path.add(event.point);
    };

    // Add a point on mouse drag
    this.tool.onMouseDrag = event => this.path.add(event.point);

    // Optionally add a point if we didn't move very far
    this.tool.onMouseUp = (event) => {
      if (this.path.segments.length < 2) {
        this.path.add(event.point);
      }
    };
  }

  onClick() {
    this.tool.activate();
  }

  render() {
    return (
      <button className="tool" type="button" onClick={() => this.onClick()}>
        Draw
      </button>
    );
  }
}

export default DrawingTool;
