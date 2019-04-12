import {
  project,
  Color,
  Path,
} from 'paper';
<<<<<<< HEAD
import {Button} from 'react-materialize';
||||||| merged common ancestors
=======
import BaseTool from './base_tool';
>>>>>>> Hook tools and settings up to react

class EraserTool extends BaseTool {
  constructor(props) {
    super(props);

    this.toolText = 'Erase';
    this.toolId = EraserTool.TOOL_ID;

    // Create the eraser tool
    this.removeList = [];

    // Get all of the intersections with the erase tool, remove any path that the
    // eraser path intersects with.
    this.tool.onMouseDown = (event) => {
      const { toolSettings } = this.props;
      const eraserSettings = toolSettings.eraserSettings || {
        width: 5,
      };

      this.path = new Path();
      this.path.strokeColor = new Color(0, 0, 0, 0.5);
      this.path.strokeWidth = eraserSettings.width;
      this.path.strokeJoin = 'round';
      this.path.strokeCap = 'round';
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
}

EraserTool.TOOL_ID = 2;

export default EraserTool;
