import React from 'react';
import update from 'immutability-helper';
import BaseSettings from './base_settings';
import WidthSlider from '../width_slider';
import { EraserTool } from '../tools';

class EraserSettings extends BaseSettings {
  constructor(props) {
    super(props);

    this.toolId = EraserTool.TOOL_ID;

    this.changeWidth = this.changeWidth.bind(this);
  }

  changeWidth(width) {
    const { toolSettings, updateSettings } = this.props;
    const newSettings = update(toolSettings, {
      eraserSettings: { width: { $set: width } },
    });
    updateSettings(newSettings);
  }

  renderSettings() {
    const { toolSettings: { eraserSettings } } = this.props;
    return (
      <>
        <WidthSlider
          initialWidth={eraserSettings.width}
          onChange={this.changeWidth}
        />
      </>
    );
  }
}

EraserSettings.DEFAULT = {
  width: 5,
};

export default EraserSettings;
