import React, { Component } from 'react';
import moment from 'moment';
import anime from 'animejs';

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

  handleItemAnimation = () => {
    let itemAnimate = anime({
      targets: '.news__item',
      translateX: ['-50%', 0],
      direction: 'alternate',
      opacity: [0, 1],
      duration: 2000,
      delay: function(el, i, l) {
        return i * 200;
      },
      loop: true
    });
  };

  render() {
    const { news, newsOverlay } = this.state;
    const divStyle = {
      // backgroundImage: `url(${newsOverlay})`
    };

    return (
      <React.Fragment>
        {!!news && !!news.length ? (
          <div className="news news--wrap mb-0">
            <div className="news__overlay" style={divStyle} />
            {news.map((item, index) => {
              const month = moment(item.date).format('MMM');
              const day = moment(item.date).format('D');

              return (
                <div className="news__item news__item--shadow" key={index}>
                  <div className="news__sched">
                    <div className="news__month">{month}</div>
                    <div className="news__day">{day}</div>
                  </div>
                  <div className="news__content">
                    <h3 className="news__title">{item.title}</h3>
                    <div className="news__meta">
                      <span className="news__location">{item.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </React.Fragment>
    );
  }
}
