import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }

  getFile = () => {
      console.log('getFile called.');
      this.setState({file: 'url-file.js'});
  };

  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <h1 className="App-title">
            Welcome to React
                  </h1>
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
            Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
            Learn React
                  </a>
              </header>
              <p className="App-intro">File: {this.state.file}</p>
              <button className='elf' onClick={this.getFile}>Get Nine</button>
          </div>
      );
  }
}

export default App;
