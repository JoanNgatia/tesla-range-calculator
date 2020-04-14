import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCar.css';

class TeslaCar extends React.Component {
  render() {
    return (
    <div className="tesla-car">
      <div className="tesla-wheels">
        <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${this.props.wheelsize}`}></div>
        <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${this.props.wheelsize}`}>></div>
      </div>
    </div>
    )
  }
}

TeslaCar.propTypes = {
  wheelsize: PropTypes.number
}

export default TeslaCar;
