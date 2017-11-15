import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipCard from './components/FlipCard';
import Header2 from './components/Header/Header2';
import Footer from './components/Footer/Footer';
import Collapsible from './components/Collapsible/';
import member from './member.json';
import './Aboutus.less';

export default class Home extends Component {

  render() {

    return (
      <div id="pageHome">
        <Header2 />
        <div className="profile owl-carousel owl-theme" id="owl-example">
          {
            member.map(memberData => <FlipCard className="item" {...memberData} />)
          }
        </div>
        <Collapsible />
        <Footer />
      </div>
    );
  }
}