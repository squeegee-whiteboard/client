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

    this.hitTest = this.hitTest.bind(this);
  }

  componentDidMount() {
    // Get all of the intersections with the erase tool, remove any path that the
    // eraser path intersects with.
    this.tool.onMouseDown = (event) => {
      const { toolSettings: { eraserSettings } } = this.props;
      this.removeList = [];

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

      this.hitTest(event.point);
    };

    // Remove the items in the removelist on mouse up
    this.tool.onMouseUp = (event) => {
      // Remove the path
      this.path.remove();

      // If the path was too short, hit test at the click location
      if (this.path.segments.length < 2) {
        this.hitTest(event.point);
      }

      this.removeList.forEach(item => item.remove());

      const { socket } = this.props;
      const pathJSONList = this.removeList.map(item => item.exportJSON());

      // Only broadcast if we actually removed something
      if (pathJSONList.length > 0) {
        socket.emit('removed_paths', pathJSONList);
      }
    };
  }

  hitTest(point) {
    // Test if we've collided with a stroke with our eraser
    const hitObject = project.hitTest(
      point,
      {
        stroke: true,
        segments: true,
        fill: true,
        // This makes sure width actually makes the eraser bigger
        tolerance: this.path.strokeWidth / 2,
        // Don't match the current path
        match: result => result.item.id !== this.path.id,
      },
    );

    // Return the object if it's not already in the list
    if (hitObject !== null) {
      if (!this.removeList.includes(hitObject.item)) {
        this.removeList.push(hitObject.item);
      }
    }
  }
}

EraserTool.TOOL_ID = 2;

export default EraserTool;
