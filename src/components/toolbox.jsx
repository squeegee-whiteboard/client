import React from 'react';
import { DrawingTool, EraserTool } from './tools';
import { DrawingSettings, EraserSettings } from './tool_settings';
import './toolbox.css';

class Toolbox extends React.Component {
<<<<<<< HEAD
=======
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

>>>>>>> 238d4d7b113753836528ad6df14cffdd821a1b3d
  render() {
    const { selectedTool, toolSettings } = this.state;
    return (
      <div className="toolbox">
        <div className="tools">
<<<<<<< HEAD
          <DrawingTool />
          <EraserTool />
        </div>
        <div className="tool-settings">
          <DrawingSettings />
          <EraserSettings />
=======
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
>>>>>>> 238d4d7b113753836528ad6df14cffdd821a1b3d
        </div>
      </div>
    );
  }
}

export default Toolbox;
