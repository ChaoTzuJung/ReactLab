import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Footer.less';
import Logo from '../../../../static/images/liveshare.png';

export default class Footers extends Component {

  render() {
    return (
      <footer className="page-footer blue-grey darken-4">
        <div className="container bd-1-yellow">
          <div className="row">
            <div className="col l6 s12 bd-1-red w50">
              <ul className="foot-list">
                <li><a className="grey-text text-lighten-3" href="#!">關於我們</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">提供意見</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">隱私權</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">服務條件</a></li>
              </ul>
            </div>
            <div className="col l6 s12 bd-1-orange w50">
              <ul className="foot-list">
                <li><i className="fa fa-twitter fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-instagram fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-facebook-official fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-youtube-play fa-2x" aria-hidden="true" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright bd-1-white">
          <div className="container flex-jc-sb-ai-ct bd-1-green">
            <div className="bd-1-blue align-self-fe">
              <div className="imgBox">
                <div className="imgBox-inner">
                  <div className="imgBox-fit">
                    <img className="image" alt="liveshare" src={`${Logo}`} />
                  </div>
                </div>
              </div>
            </div>
            <p className="align-self-fe mb10">Copyright @ 2017 LiveShare Inc. 保留一切權利。</p>
            <select className="browser-default w16 fr align-self-fe">
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
