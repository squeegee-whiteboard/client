import { paper } from 'paper';
import BaseTool from './base_tool';

class PanTool extends BaseTool {
  constructor(props) {
    super(props);

    this.toolText = 'Pan';
    this.toolId = PanTool.TOOL_ID;

    this.tool.onMouseDrag = (event) => {
      let a = event.downPoint.subtract(event.point);
      a = a.add(paper.view.center);
      paper.view.center = a;
    };
  }
}

PanTool.TOOL_ID = 3;

export default PanTool;
