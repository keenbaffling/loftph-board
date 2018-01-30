import React, { Component } from 'react';
import Slack from 'slack';
// import axios from 'axios';
// import _ from 'lodash';
// import WebSocket from 'ws';

import List from './List';

// const SLACK_BOT_TOKEN =
//   'xoxp-45222654323-244390577154-304476325029-fccb6fd608d99c6f647b80de9205801a';
const SLACK_BOT_TOKEN = 'xoxp-45222654323-244390577154-284534660528-ee37de8b670fc9609409542dfcbc85d2';
const SLACK_CLIENT_ID = '45222654323.277629061831';
const SLACK_CLIENT_SECRET = 'e3c6dc2fdb68b991f46ead58a1ec5555';
const SLACK_CHANNEL = 'C8ZDH5GTH';
const bot = new Slack({ token: SLACK_BOT_TOKEN });

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      history: [],
      channel: [],
      members: [],
      emoji: []
    };
  }

  componentDidMount() {
    this.rtmConnect();
    // this.rtmStart();
    // this.getHistory(SLACK_CHANNEL);
    // this.getChannelInfo(SLACK_CHANNEL);
    // this.getUsersList();
    // this.getEmoji();
  }

  getHistory = channel => {
    bot.channels
      .history({
        channel
      })
      .then(res => res.messages)
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
    const WebSocket = require('ws');
    const ws = new WebSocket(this.state.url, {
      perMessageDeflate: false
    });

    // ws.on('open', () => {
    //   console.log('connection open');
    // });

    // ws.on('message', (data) => {
    //   console.log(data);
    // });

    // socket.onerror = error => console.error(error);

    // console.log(this.state.url);

    // const io = require('socket.io-client');
    // const socket = io(this.state.url);
  };

  render() {
    // const { } = this.state;

    return (
      <React.Fragment>
        Loading...
        {/* <List messages={messages} /> */}
      </React.Fragment>
    );
  }
}
