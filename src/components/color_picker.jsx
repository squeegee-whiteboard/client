import React from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import './color_picker.css';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    const { initialColor } = this.props;

    this.state = {
      displayColorPicker: false,
      color: initialColor,
    };
  }

  getStyle() {
    const { color } = this.state;
    return {
      backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    };
  }

  changeColor(color) {
    const { displayColorPicker } = this.state;
    const { onChange } = this.props;
    this.setState({
      displayColorPicker,
      color: color.rgb,
    });
    onChange(color);
  }

  toggleColorPicker() {
    const { color, displayColorPicker } = this.state;
    this.setState({
      color,
      displayColorPicker: !displayColorPicker,
    });
  }

  render() {
    const { color, displayColorPicker } = this.state;

    return (
      <div>
        Color
        <div
          role="button"
          tabIndex={0}
          className="colorValue"
          style={this.getStyle()}
          onClick={() => this.toggleColorPicker()}
          onKeyPress={() => this.handleKeyPress()}
        />
        {displayColorPicker && (
          <ChromePicker
            color={color}
            onChangeComplete={newColor => this.changeColor(newColor)}
          />
        )}
      </div>
    );
  }
}

ColorPicker.propTypes = {
  initialColor: PropTypes.shape({
    r: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    a: PropTypes.number.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
