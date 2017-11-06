import React, { Component } from 'react';
import Logo from '../../../../static/images/liveshare.png';
// import PropTypes from 'prop-types';
import './Header.less';

export default class Header extends Component {

  render() {
    const LogoImage = {
      backgroundImage: `url(${Logo})`
    };
    return (
      <nav className="header">
        <div className="nav-wrapper white formobile">
          <a href="" className="brand-logo center">
            <div className="imgbox imgbox-mobile">
              <div className="imgbox-inner">
                <div className="image" style={LogoImage} />
              </div>
            </div>
          </a>
        </div>
        <div className="nav-wrapper white">
          <ul className="left hide-on-med-and-dow">
            <li>
              <a href="" className="greenline current">
                <span className="grey-text text-darken-4">Video</span>
              </a>
            </li>
            <li>
              <a href="" className="greenline">
                <span className="grey-text text-darken-4">About us</span>
              </a>
            </li>
          </ul>
          <a href="" className="brand-logo center">
            <div className="imgbox">
              <div className="imgbox-inner">
                <div className="image" style={LogoImage} />
              </div>
            </div>
          </a>
          <li className="Search_1">
            <a href="" className="greenline">
              <i className="material-icons grey-darken-4">search</i>
            </a>
          </li>
          <ul className="right hide-on-med-and-dow">
            <li className="Search_2">
              <a href="" className="greenline">
                <i className="material-icons grey-darken-4">search</i>
              </a>
            </li>
            <li>
              <a href="" className="greenline">
                <span className="grey-text text-darken-4">Log in</span>
              </a>
            </li>
            <li>
              <a href="" className="greenline">
                <span className="grey-text text-darken-4">Sign up</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

