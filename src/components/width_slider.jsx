import React from 'react';
import PropTypes from 'prop-types';

class WidthSlider extends React.Component {
  constructor(props) {
    super(props);

    const { initialWidth } = this.props;

    this.state = {
      width: initialWidth,
    };
  }

  changeWidth(width) {
    const { onChange } = this.props;
    this.setState({
      width,
    });
    onChange(width);
  }

  render() {
    const { width } = this.state;

    return (
      <div>
        Width
        <input
          type="range"
          value={width}
          min={1}
          max={50}
          step={1}
          onChange={event => this.changeWidth(parseInt(event.target.value, 10))}
        />
      </div>
    );
  }
}

WidthSlider.propTypes = {
  initialWidth: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WidthSlider;
