import React from 'react';
import PropTypes from 'prop-types';
import { BaseTool } from '../tools';

class BaseSettings extends React.Component {
  constructor(props) {
    super(props);

    this.toolId = BaseTool.TOOL_ID;
  }

  // Disable the class methods validator since this is a base class
  /* eslint-disable class-methods-use-this */
  renderSettings() {
    return <div>Base Tool Settings</div>;
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { selectedTool } = this.props;
    const selected = selectedTool === this.toolId;
    const render = selected ? this.renderSettings() : null;
    return render;
  }
}

BaseSettings.propTypes = {
  // Disable unused proptypes lint rule since this is a base class
  // eslint-disable-next-line react/no-unused-prop-types
  updateSettings: PropTypes.func.isRequired,
  selectedTool: PropTypes.number.isRequired,
  toolSettings: PropTypes.shape({
    drawingSettings: PropTypes.shape({
      width: PropTypes.number.isRequired,
      color: PropTypes.shape({
        r: PropTypes.number.isRequired,
        g: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
        a: PropTypes.number.isRequired,
      }).isRequired,
    }),
    eraserSettings: PropTypes.shape({
      width: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default BaseSettings;
