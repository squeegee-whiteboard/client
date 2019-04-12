import './tool_settings.css';
import React from 'react';
import ColorPicker from '../color_picker';
import WidthSlider from '../width_slider';
import BaseSettings from './base_settings';
import { DrawingTool } from '../tools';

class DrawingSettings extends BaseSettings {
  constructor(props) {
    super(props);

    this.toolId = DrawingTool.TOOL_ID;
  }

  changeColor(color) {
    const { toolSettings, updateSettings } = this.props;
    const { drawingSettings } = toolSettings;
    const newSettings = Object.assign({}, toolSettings);
    newSettings.drawingSettings = {
      width: drawingSettings.width,
      color: color.rgb,
    };
    updateSettings(newSettings);
  }

  changeWidth(width) {
    const { toolSettings, updateSettings } = this.props;
    const { drawingSettings } = toolSettings;
    const newSettings = Object.assign({}, toolSettings);
    newSettings.drawingSettings = {
      color: drawingSettings.color,
      width,
    };
    updateSettings(newSettings);
  }

  renderSettings() {
    const { toolSettings: { drawingSettings } } = this.props;
    return (
      <>
        <ColorPicker
          initialColor={drawingSettings.color}
          onChange={color => this.changeColor(color)}
        />
        <WidthSlider
          initialWidth={drawingSettings.width}
          onChange={width => this.changeWidth(width)}
        />
      </>
    );
  }
}

DrawingSettings.DEFAULT = {
  width: 5,
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  },
};

export default DrawingSettings;
