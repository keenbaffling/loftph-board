import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import io from 'socket.io-client';

import '../../assets/fonts/gotham/stylesheet.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Status from '../Status';
import News from '../News';
import InSpace from '../InSpace';

class App extends Component {
  state = {
    isLoading: true,
    url: 'http://localhost:3000',
    users: [],
    news: [],
    status: []
  };

  componentDidMount() {
    // this.handleUsers();
    this.handleNews();
    // this.handleStatus();
  }

  handleNews = () => {
    const { url } = this.state;
    const socket = io.connect(url);

    socket.emit('request news', 1000);
    socket.on('news', data => {
      console.log(data);
      // this.setState({ news: data });
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
        <div className="container-fluid">
          <div className="row">
            <div className="block block--top">
              <News news={news} />
            </div>
            <div className="block block--bottom">
              <div className="col-md-6">
                <Status status={status} />
              </div>
              <div className="col-md-6">
                <InSpace users={users} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
