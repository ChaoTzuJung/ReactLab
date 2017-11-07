import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Block from '../Card/Block';
import Wave from '../Wave';
import './Section.less';

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    dataList: PropTypes.array,
    goDetail: PropTypes.func,
    desc: PropTypes.string,
    reverse: PropTypes.bool,
  }

  render() {
    const {
      title, id, dataList, goDetail, desc, reverse
    } = this.props;
    return (
      <div className="section" id={id}>
        <div className="headertitle">
          <div className="item">
            <h2>{title}</h2>
          </div>
          <button className="more" onClick={() => goDetail(id)}>
            <Wave />
          </button>
        </div>
        <div className="content">
          <div className="row">
            {
              dataList.map(
                data =>
                  <Block
                    {...data}
                  />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
