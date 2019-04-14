import React from 'react';
import { DrawingTool, EraserTool } from './tools';
import { DrawingSettings, EraserSettings } from './tool_settings';
import './toolbox.css';

class Toolbox extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTool: DrawingTool.TOOL_ID,
      toolSettings: {
        drawingSettings: DrawingSettings.DEFAULT,
        eraserSettings: EraserSettings.DEFAULT,
      },
    };
  }

  selectTool(toolId) {
    const { toolSettings } = this.state;
    this.setState({
      selectedTool: toolId,
      toolSettings,
    });
  }

  updateSettings(toolSettings) {
    const { selectedTool } = this.state;
    this.setState({
      selectedTool,
      toolSettings,
    });
  }

  render() {
    const { selectedTool, toolSettings } = this.state;
    return (
      <div className="toolbox">
        <div className="tools">
          <DrawingTool
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            selectTool={toolId => this.selectTool(toolId)}
          />
          <EraserTool
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            selectTool={toolId => this.selectTool(toolId)}
          />
        </div>
        <div className="tool-settings">
          <DrawingSettings
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            updateSettings={newSettings => this.updateSettings(newSettings)}
          />
          <EraserSettings
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            updateSettings={newSettings => this.updateSettings(newSettings)}
          />
        </div>
      </div>
    );
  }
}

export default Toolbox;
