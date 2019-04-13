import React from 'react';
import {
  project,
  Color,
  Path,
  Tool,
} from 'paper';
import {Button} from 'react-materialize';

class EraserTool extends React.Component {
  constructor() {
    super();

    // Create the eraser tool
    this.tool = new Tool();
    this.removeList = [];
    this.strokeWidth = 5;

    // Get all of the intersections with the erase tool, remove any path that the
    // eraser path intersects with.
    this.tool.onMouseDown = (event) => {
      this.path = new Path();
      this.path.strokeColor = new Color(0, 0, 0, 0.5);
      this.path.strokeWidth = this.strokeWidth;
      this.path.add(event.point);
    };

    // Hit test with all objects along the way and add them to the remove list
    this.tool.onMouseDrag = (event) => {
      this.path.add(event.point);

      // Tests if we've collided with a stroke with our eraser
      const hitObj = project.hitTest(event.point, { stroke: true });
      if (hitObj) {
        this.removeList.push(hitObj.item);
      }
    };

    // Remove the items in the removelist on mouse up
    this.tool.onMouseUp = () => {
      const items = project.activeLayer.getItems();
      const intersections = items.filter(item => this.path.intersects(item));
      intersections.forEach(item => item.remove());
      this.removeList.forEach(item => item.remove());
      this.removeList = [];
      this.path.remove();
    };
  }

  onClick() {
    this.tool.activate();
  }

  render() {
    return (
      <Button id="tools" className="waves-effect waves-light btn-small" onClick={() => this.onClick()}>
        Erase
      </Button>
    );
  }
}

export default EraserTool;
