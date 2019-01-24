import React, { Component } from 'react';
import Header from './common/Header';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
