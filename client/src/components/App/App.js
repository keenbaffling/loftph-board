import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import io from 'socket.io-client';

import '../../assets/fonts/gotham/stylesheet.css';
import './App.css';

import Status from '../Status';
import News from '../News';
import InSpace from '../InSpace';

class App extends Component {
  state = {
    isLoading: true,
    url: {
      users: 'http://localhost:3002/users',
      news: 'http://localhost:3002/news',
      status: 'http://localhost:3002/status'
    },
    users: [],
    news: [],
    status: []
  };

  componentDidMount() {
    this.handleUsers();
    this.handleNews();
    this.handleStatus();
  }

  handleNews = () => {
    const { url } = this.state;
    const socket = io.connect(url.news);

    socket.emit('request data', 1000);
    socket.on('data', data => {
      this.setState({ news: data });
    });
  };

  handleStatus = () => {
    const { url } = this.state;
    const socket = io.connect(url.status);

    socket.emit('request data', 1000);
    socket.on('data', data => {
      this.setState({ status: data });
    });
  };

  handleUsers = () => {
    const { url } = this.state;
    const socket = io.connect(url.users);

    socket.emit('request data', 1000);
    socket.on('data', data => {
      this.setState({ users: data });
    });
  };

  render() {
    const { isLoading, news, status, users } = this.state;

    return (
      <div className="App">
        <Helmet>
          <title>LOFT Coworking Philippines</title>
        </Helmet>
        <News news={news} />
        <Status status={status} />
        <InSpace users={users} />
      </div>
    );
  }
}

export default App;
