import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import 'whatwg-fetch';
import {Qux} from "./Qux";
import {GitGist} from "./GitGist";
import {TestRoutes} from "./TestRoutes";
import {GitUserGetUser, GitUserYouRang} from "./GitUser";

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown',
            status: 'unknown',
            result: 'unknown',
            server: 'unknown',
            login: 'unknown',
            id: 'unknown',
            node_id: 'unknown',
            name: 'unknown'
        };
    }

    queryServer = (event) => {
        const that = this;
        fetch(event.target.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    queryGitHub = () => {
        const that = this;
        fetch('https://api.github.com/users/pittman8')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                    state: {this.state.status} file: {this.state.file}
                </p>
                <p className="App-intro">
                    result: {this.state.result} server: {this.state.server}
                </p>

                <TestRoutes queryServer={this.queryServer}/>
                <Qux queryServer={this.queryServer}/>
                <GitGist queryServer={this.queryServer}/>
                <GitUserYouRang queryServer={this.queryServer}/>

                <p className="App-intro">
                    login: {this.state.login}
                </p>
                <p className="App-intro">
                    id: {this.state.id}
                </p>
                <p className="App-intro">
                    node_id: {this.state.node_id}
                </p>
                <p className="App-intro">
                    name: {this.state.name}
                </p>
                <GitUserGetUser queryGitHub={this.queryGitHub}/>
            </div>
        );
    }
}

export default App;