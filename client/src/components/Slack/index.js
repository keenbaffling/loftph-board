import React, { Component } from 'react';
import Slack from 'slack';

import List from './List';

const SLACK_BOT_TOKEN =
  'xoxp-45222654323-244390577154-304476325029-fccb6fd608d99c6f647b80de9205801a';
const SLACK_CLIENT_ID = '45222654323.277629061831';
const SLACK_CLIENT_SECRET = 'e3c6dc2fdb68b991f46ead58a1ec5555';
const SLACK_CHANNEL = 'C8ZDH5GTH';
const bot = new Slack({ token: SLACK_BOT_TOKEN });

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
      channel: [],
      members: [],
      emoji: []
    };
  }

  componentDidMount() {
    this.rtmConnect();
    this.rtmStart();
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
      .connect();
  };

  rtmStart = () => {
    bot
      .rtm
      .start();
  };

  render() {
    // const { } = this.state;
    console.log(this.state);

    return (
      <React.Fragment>
        Loading...
        {/* <List messages={messages} /> */}
      </React.Fragment>
    );
  }
}
