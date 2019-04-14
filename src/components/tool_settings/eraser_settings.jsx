import React from 'react';
import BaseSettings from './base_settings';
import WidthSlider from '../width_slider';
import { EraserTool } from '../tools';

class EraserSettings extends BaseSettings {
  constructor(props) {
    super(props);

    this.toolId = EraserTool.TOOL_ID;
  }

  changeWidth(width) {
    const { toolSettings, updateSettings } = this.props;
    const newSettings = Object.assign({}, toolSettings);
    newSettings.eraserSettings = {
      width,
    };
    updateSettings(newSettings);
  }

  renderSettings() {
    const { toolSettings: { eraserSettings } } = this.props;
    return (
      <>
        <WidthSlider
          initialWidth={eraserSettings.width}
          onChange={width => this.changeWidth(width)}
        />
      </>
    );
  }
}

EraserSettings.DEFAULT = {
  width: 5,
};

export default EraserSettings;
