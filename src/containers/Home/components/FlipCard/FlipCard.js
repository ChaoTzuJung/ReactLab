import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FlipCard.less';

export default class FildCard extends Component {

  static propTypes = {
    name: PropTypes.String,
    title: PropTypes.String,
    photo: PropTypes.String,
    // Expertise: PropTypes.String,
    Introduction: PropTypes.String,
    // github: PropTypes.String,
  }

  render() {
    return (
      <div className="container flipCard">
        <div className="front" style={{ backgroundImage: `url(${this.props.photo})` }}>
          <div className="inner">
            <p>{this.props.name}</p>
            <span>{this.props.title}</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{this.props.Introduction}</p>
          </div>
        </div>
      </div>
    );
  }
}
