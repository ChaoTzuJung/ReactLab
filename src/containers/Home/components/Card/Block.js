import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Block.less';


export default class Block extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    demoUrl: PropTypes.string,
    repoUrl: PropTypes.string,
  }
  render() {
    const {
      name,
      description,
      img,
      demoUrl,
      repoUrl,
    } = this.props;
    const bgStyle = {
      backgroundImage: `URL("${img}")`
    };
    return (
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://fakeimg.pl/300/" alt="#" />
            <span className="card-title">#</span>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
            <p><a href={repoUrl}>This is a link</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
      </div>
    );
  }
}
