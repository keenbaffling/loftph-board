import React, { Component } from 'react';
// import axios from 'axios';
import io from 'socket.io-client';
import './App.css';

class App extends Component {
  state = {
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
    const { news, status, users } = this.state;

    return (
      <div className="App">
        <h1>News</h1>
        {!!news && !!news.length ? (
          <React.Fragment>
            <ul>
              {news.map(item => (
                <li key={item.id}>
                  {item.title} - {item.date} - {item.location}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ) : (
          <span>Nothing to show.</span>
        )}

        <h1>Status</h1>
        {!!status && !!status.length ? (
          <React.Fragment>
            <ul>
              {status.map((item, index) => (
                <li key={index}>
                  {item.title} - {item.total} - {item.occupied}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ) : (
          <span>Nothing to show.</span>
        )}

        <h1>Users</h1>
        {!!users && !!users.length ? (
          <React.Fragment>
            {/* {console.log(users)} */}
            <ul>{users.map((item, index) => <li key={index}>{item}</li>)}</ul>
          </React.Fragment>
        ) : (
          <span>Nothing to show.</span>
        )}
      </div>
    );
  }
}

export default App;
