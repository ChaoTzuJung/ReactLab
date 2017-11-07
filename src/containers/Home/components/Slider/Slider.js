import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import $ from 'jquery';
// import { Button, Card, Row, Col, Input, Modal, Icon } from 'react-materialize';
import './Slider.less';

export default class Slider extends Component {
  render() {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <img className="materialboxed" src="https://lorempixel.com/580/250/nature/1" alt="pic" />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here our small slogan.</h5>
            </div>
          </li>
          <li>
            <img className="materialboxed" src="https://lorempixel.com/580/250/nature/2" alt="pi"/>
            <div className="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here our small slogan.</h5>
            </div>
          </li>
          <li>
            <img className="materialboxed" src="https://lorempixel.com/580/250/nature/3" alt="pic"/>
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here our small slogan.</h5>
            </div>
          </li>
          <li>
            <img className="materialboxed" src="https://lorempixel.com/580/250/nature/4" alt="pic"/>
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here our small slogan.</h5>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

