import React, { Component } from 'react';
import anime from 'animejs';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    console.log('componentWillMount');

  }

  componentDidMount() {
    console.log('componentDidMount');

  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');

  }

  render() {
    const { users: items } = this.props;

    return (
      <div className="avatar">
        {!!items && !!items.length ? (
          <React.Fragment>
            {items.map((item, index) => (
              <div className="avatar__item" key={index}>
                <img className="img avatar__item-img" src={item} alt="" />
              </div>
            ))}
          </React.Fragment>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    );
  }
}
