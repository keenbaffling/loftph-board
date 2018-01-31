import React, { Component } from 'react';
import Slack from 'slack';
// import axios from 'axios';
import _ from 'lodash';
// import WebSocket from 'ws';

import List from './List';

const SLACK_BOT_TOKEN = process.env.REACT_APP_SLACK_BOT_TOKEN;
const SLACK_CLIENT_ID = process.env.REACT_APP_SLACK_CLIENT_ID;
const SLACK_CLIENT_SECRET = process.env.REACT_APP_SLACK_CLIENT_SECRET;
const SLACK_CHANNEL = process.env.REACT_APP_SLACK_CHANNEL;

const bot = new Slack({ token: SLACK_BOT_TOKEN });

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      history: [],
      channel: [],
      members: [],
      emoji: [],
      message: []
    };
  }

  componentDidMount() {
    this.rtmConnect();
    // this.rtmStart();
    this.getHistory(SLACK_CHANNEL);
    this.getChannelInfo(SLACK_CHANNEL);
    this.getUsersList();
    this.getEmoji();
  }

  getHistory = channel => {
    bot.channels
      .history({
        channel
      })
      .then(res => _.reverse(res.messages,))
      .then(history => this.setState({ history }))
      .catch(console.error);
  };

  getChannelInfo = channel => {
    bot.channels
      .info({
        channel
      })
      .then(res => res.channel)
      .then(channel => this.setState({ channel }))
      .catch(console.error);
  };

  getUsersList = () => {
    bot
      .users
      .list()
      .then(res => res.members)
      .then(members => this.setState({ members }))
      .catch(console.error);
  };

  getEmoji = () => {
    bot
      .emoji
      .list()
      .then(res => res.emoji)
      .then(emoji => this.setState({ emoji }))
      .catch(console.error);
  };

  rtmConnect = () => {
    bot
      .rtm
      .connect()
      // .then(console.log)
      .then(res => this.setState({ url: res.url }))
      .then(this.handleRTM)
      .catch(console.error);
  };

  rtmStart = () => {
    bot
      .rtm
      .start()
      // .then(console.log)
      .then(res => this.setState({ url: res.url }))
      .then(this.handleRTM)
      .catch(console.error);
  };

  handleRTM = () => {
    // const WebSocket = require('ws');
    const ws = new WebSocket(this.state.url);


    ws.onmessage = event => {
      const data = JSON.parse(event.data);

      switch (data.type) {
        case 'message':
          if (data.channel === SLACK_CHANNEL) {
            this.setState({ history: this.state.history.concat(data) });
          }
          break;

        default:
          break;
      }
    };
  };

  render() {
    const { history } = this.state;

    return (
      <React.Fragment>
        {/* Loading... */}
        {/* <List messages={messages} /> */}

        {!!history.length && history.map((item, index) => (
          <li key={index}>{item.user} | {item.text}</li>
        ))}
      </React.Fragment>
    );
  }
}
