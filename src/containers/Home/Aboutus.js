import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipCard from './components/FlipCard';

import Header from './components/Header';
import member from './member.json';
import './Aboutus.less';

export default class Home extends Component {

  render() {

    return (
      <div id="pageHome">
        <Header />
        <div className="profile">
          {
            member.map(memberData => <FlipCard {...memberData} />)
          }
        </div>
      </div>
    );
  }
}
