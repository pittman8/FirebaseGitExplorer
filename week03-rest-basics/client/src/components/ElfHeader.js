import React, { Component } from 'react';
import logo from '../images/watermelon.svg';
import '../css/App.css';

class ElfHeader extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </h1>
                <h2 className="App-header">Welcome to React</h2>
            </div>
        );
    }
}

export default ElfHeader;
