import React from 'react';
import { DrawingTool, EraserTool } from './tools';
import { DrawingSettings, EraserSettings } from './tool_settings';
import './toolbox.css';

class Toolbox extends React.Component {
  render() {
    return (
      <div className="toolbox">
        <div className="tools">
          <DrawingTool />
          <EraserTool />
        </div>
        <div className="tool-settings">
          <DrawingSettings />
          <EraserSettings />
        </div>
      </div>
    );
  }
}

export default Toolbox;
