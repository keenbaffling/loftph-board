import React, { Component } from 'react';
import moment from 'moment';

import List from './List';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      newsOverlay: require('../../assets/images/bg-events.jpg'),
      news: this.props.news
    };
  }

  componentDidMount() {
    this.handleItemAnimation();
  }

  handleItemAnimation = () => {};

  render() {
    const { news, newsOverlay } = this.state;

    return <React.Fragment>
      <List items={news} />
    </React.Fragment>;
  }
}
