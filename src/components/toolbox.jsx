import React from 'react';
import { DrawingTool, EraserTool } from './tools';
import { DrawingSettings, EraserSettings } from './tool_settings';
import './toolbox.css';

class Toolbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTool: DrawingTool.TOOL_ID,
      toolSettings: {
        drawingSettings: DrawingSettings.DEFAULT,
        eraserSettings: EraserSettings.DEFAULT,
      },
    };

    this.selectTool = this.selectTool.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
  }

  selectTool(selectedTool) {
    this.setState({ selectedTool });
  }

  updateSettings(toolSettings) {
    this.setState({ toolSettings });
  }

  render() {
    const { selectedTool, toolSettings } = this.state;
    return (
      <div className="toolbox">
        <div className="tools">
          <DrawingTool
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            selectTool={this.selectTool}
          />
          <EraserTool
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            selectTool={this.selectTool}
          />
        </div>
        <div className="tool-settings">
          <DrawingSettings
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            updateSettings={this.updateSettings}
          />
          <EraserSettings
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            updateSettings={this.updateSettings}
          />
        </div>
      </div>
    );
  }
}

export default Toolbox;
