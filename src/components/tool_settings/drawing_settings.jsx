import React from 'react';
import update from 'immutability-helper';
import ColorPicker from '../color_picker';
import WidthSlider from '../width_slider';
import BaseSettings from './base_settings';
import { DrawingTool } from '../tools';

class DrawingSettings extends BaseSettings {
  constructor(props) {
    super(props);

    this.toolId = DrawingTool.TOOL_ID;
    this.changeColor = this.changeColor.bind(this);
    this.changeWidth = this.changeWidth.bind(this);
  }

  changeColor(color) {
    const { toolSettings, updateSettings } = this.props;
    const newSettings = update(toolSettings, {
      drawingSettings: { color: { $set: color.rgb } },
    });
    updateSettings(newSettings);
  }

  changeWidth(width) {
    const { toolSettings, updateSettings } = this.props;
    const newSettings = update(toolSettings, {
      drawingSettings: { width: { $set: width } },
    });
    updateSettings(newSettings);
  }

  renderSettings() {
    const { toolSettings: { drawingSettings } } = this.props;
    return (
      <>
        <WidthSlider
          initialWidth={drawingSettings.width}
          onChange={this.changeWidth}
        />
        <ColorPicker
          initialColor={drawingSettings.color}
          onChange={this.changeColor}
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
