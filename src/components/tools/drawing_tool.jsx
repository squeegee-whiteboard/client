<<<<<<< HEAD
import React from 'react';
import { Tool, Path } from 'paper';
import { Button } from 'react-materialize';
=======
import { Path } from 'paper';
import BaseTool from './base_tool';
>>>>>>> 238d4d7b113753836528ad6df14cffdd821a1b3d

class DrawingTool extends BaseTool {
  constructor(props) {
    super(props);

    this.toolText = 'Draw';
    this.toolId = DrawingTool.TOOL_ID;

    // Configure the drawing tool
    // Start a new path on mouse down
    this.tool.onMouseDown = (event) => {
      const { toolSettings } = this.props;
      const { drawingSettings } = toolSettings;
      const { color } = drawingSettings;
      const strokeColor = [
        color.r / 255,
        color.g / 255,
        color.b / 255,
        color.a,
      ];

      this.path = new Path();
      this.path.strokeColor = strokeColor;
      this.path.strokeWidth = drawingSettings.width;
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
}

DrawingTool.TOOL_ID = 1;

export default DrawingTool;
