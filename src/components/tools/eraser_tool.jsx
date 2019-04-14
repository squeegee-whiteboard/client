import {
  project,
  Color,
  Path,
} from 'paper';
import BaseTool from './base_tool';

class EraserTool extends BaseTool {
  constructor(props) {
    super(props);

    this.toolText = 'Erase';
    this.toolId = EraserTool.TOOL_ID;

    // TODO: Investigate hit test not doing anything
    // TODO: Improve eraser hit detection
    // Create the eraser tool
    // this.removeList = [];

    // Get all of the intersections with the erase tool, remove any path that the
    // eraser path intersects with.
    this.tool.onMouseDown = (event) => {
      const { toolSettings: { eraserSettings } } = this.props;

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

      // TODO: Remove this if we remove hit testing for real
      // Tests if we've collided with a stroke with our eraser
      // const hitObj = project.hitTest(event.point, { stroke: true });
      // if (hitObj) {
      //   this.removeList.push(hitObj.item);
      // }
    };

    // Remove the items in the removelist on mouse up
    this.tool.onMouseUp = () => {
      const items = project.activeLayer.getItems();
      const intersections = items.filter(item => this.path.intersects(item));
      intersections.forEach(item => item.remove());
      this.path.remove();

      // TODO: remove this if we remove hit testing for real
      // this.removeList.forEach(item => item.remove());
      // this.removeList = [];

      const { socket } = this.props;
      const pathJSONList = intersections.map(path => path.exportJSON());

      // Only broadcast if we actually removed something
      if (pathJSONList.length > 0) {
        socket.emit('removed_items', pathJSONList);
      }
    };
  }
}

EraserTool.TOOL_ID = 2;

export default EraserTool;
