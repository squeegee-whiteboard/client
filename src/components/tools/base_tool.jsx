import React from 'react';
import PropTypes from 'prop-types';
import { Tool } from 'paper';

class BaseTool extends React.Component {
  constructor(props) {
    super(props);

    this.tool = new Tool();
    this.toolText = 'Base';
    this.toolId = BaseTool.TOOL_ID;
  }

  onClick() {
    const { selectTool } = this.props;
    this.tool.activate();
    selectTool(this.toolId);
  }

  render() {
    const { selectedTool } = this.props;
    let buttonSelected = false;

    if (selectedTool === this.toolId) {
      buttonSelected = true;
    }

    return (
      <button
        className={`waves-effect waves-light btn-small ${buttonSelected ? ' selected' : ''}`}
        type="button"
        onClick={() => this.onClick()}
      >
        {this.toolText}
      </button>
    );
  }
}

BaseTool.TOOL_ID = 'base';

BaseTool.propTypes = {
  selectTool: PropTypes.func.isRequired,
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

export default BaseTool;
