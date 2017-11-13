import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Footer.less';
import Logo from '../../../../static/images/liveshare.png';

export default class Footers extends Component {

  render() {
    return (
      <footer className="page-footer blue-grey darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <ul className="foot-list">
                <li><a className="grey-text text-lighten-3" href="#!">關於我們</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">提供意見</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">隱私權</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">服務條件</a></li>
              </ul>
              <li className="brand-logo">
                <div className="imgBox">
                  <div className="imgBox-inner">
                    <div className="imgBox-fit">
                      <img className="image" alt="liveshare" src={`${Logo}`} />
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul className="foot-list">
                <li><i className="fa fa-twitter fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-instagram fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-facebook-official fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-youtube-play fa-2x" aria-hidden="true" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <p className="mb10">Copyright @ 2017 LiveShare Inc. 保留一切權利。</p>
            <select className="browser-default w50 fr">
              <option value="" disabled selected>Choose your language</option>
              <option value="1">繁體中文</option>
              <option value="2">簡體中文</option>
              <option value="3">英文</option>
            </select>
          </div>
        </div>
      </footer>
    );
  }
}

