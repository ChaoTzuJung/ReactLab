import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipCard from './components/FlipCard';
import member from './member.json';
import './Aboutus.less';

export default class Home extends Component {

  render() {

    return (
      <div id="pageHome">
        <div className="profile owl-carousel owl-theme" id="owl-example">
          {
            member.map(memberData => <FlipCard className="item" {...memberData} />)
          }
        </div>
      </div>
    );
  }
}
