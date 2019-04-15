import React from 'react';
import PropTypes from 'prop-types';
import { PanTool, DrawingTool, EraserTool } from './tools';
import { DrawingSettings, EraserSettings } from './tool_settings';
import './toolbox.css';

class Toolbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTool: PanTool.TOOL_ID,
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
    const { socket } = this.props;
    return (
      <div className={`toolbox${this.props.mobile ? '' : ' mobile-hidden'}`}>
        <div className="tools">
          <PanTool
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            selectTool={this.selectTool}
            socket={socket}
          />
          <DrawingTool
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            selectTool={this.selectTool}
            socket={socket}
          />
          <EraserTool
            selectedTool={selectedTool}
            toolSettings={toolSettings}
            selectTool={this.selectTool}
            socket={socket}
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

Toolbox.propTypes = {
  socket: PropTypes.shape({
    emit: PropTypes.func,
  }).isRequired,
};

export default Toolbox;
