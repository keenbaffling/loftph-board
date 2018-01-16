import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { news } from './api';

import './assets/fonts/gotham/stylesheet.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Status from './components/Status';
import InSpace from './components/InSpace';

class App extends Component {
  constructor() {
    super();

    news((err, data) => {
      console.log(err, data);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>LOFT</title>
        </Helmet>
        <div className="container-fluid">
          <div className="row">
            <div className="block block--top"></div>
            <div className="block block--bottom">
              <div className="col-md-6">
                <Status />
              </div>
              <div className="col-md-6">
                <InSpace />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
