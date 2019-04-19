import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown',
            status: 'unknown',
            result: 'unknown',
            server: 'unknown',
            login: 'unknown',
            id: 'unknown'
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
        fetch('/git-user-get-user')
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

                <button data-url="/api/foo" onClick={this.queryServer}>Test Foo Route</button>
                <button data-url="/qux-you-rang" onClick={this.queryServer}>Qux You Rang</button>
                <button data-url="/git-gist-you-rang" onClick={this.queryServer}>Git Gist You Rang</button>
                <button data-url="/git-user-you-rang" onClick={this.queryServer}>Git User You Rang</button>
                <p className="App-intro">
                    login: {this.state.login}
                </p>
                <p className="App-intro">
                    id: {this.state.id}
                </p>
                <button data-url="/git-user-get-user" onClick={this.queryGitHub}>Git User Get User</button>

            </div>
        );
    }
}

export default App;