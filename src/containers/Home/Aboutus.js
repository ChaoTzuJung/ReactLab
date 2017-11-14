import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipCard from './components/FlipCard';
import member from './member.json';
import './Aboutus.less';

export default class Home extends Component {

  render() {

    return (
      <div id="pageHome">
        <div className="profile">
          {
            member.map(memberData => <FlipCard {...memberData} />)
          }
        </div>
      </div>
    );
  }
}
