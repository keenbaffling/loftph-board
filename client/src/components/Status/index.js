import React, { Component } from 'react';
import List from './List';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { status } = this.props;

    return (
      <React.Fragment>
        <List status={status} />
      </React.Fragment>
    );
  }
}
