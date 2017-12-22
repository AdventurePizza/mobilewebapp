import React, { Component } from 'react';
import logo from './adventure.png';
import './App.css';
import LoginScreen from './LoginScreen';
//import { subscribeToTimer } from './api';
import Chat from './Chat';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {
  /*constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }

  state = {
    timestamp: 'no timestamp yet'
  };*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
        <p className="App-intro">
        </p>
        <Chat />
      </div>
    );
  }
}

export default App;
