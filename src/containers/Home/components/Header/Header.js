import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Header.less';

export default class Header extends Component {

  render() {
    return (
      <div className="wrapper">
        <header className="navbar u-cf">
          <div className="container">
            <div className="logo">
              <img src="http://svgshare.com/i/3Xg.svg" alt="Logo" />
            </div>
            <ul className="menu1">
              <li>
                <a href="＃" className="current">首頁</a>
                <ul className="dropdown">
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                </ul>
              </li>
              <li>
                <a href="＃">關於</a>
                <ul className="dropdown">
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                </ul>
              </li>
              <li>
                <a href="＃">產品</a>
                <ul className="dropdown">
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                </ul>
              </li>
              <li>
                <a href="＃">聯絡我們</a>
                <ul className="dropdown">
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                  <li><a href="＃">產品頁面</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

