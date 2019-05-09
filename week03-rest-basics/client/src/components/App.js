import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';
import 'whatwg-fetch';
import { Qux } from './Qux';
import { GetGist } from './GetGist';
import { TestRoutes } from './TestRoutes';
import { GetUser } from './GetUser';
import ElfHeader from './ElfHeader';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = props.appInit;
    }

    queryServer = event => {
        const that = this;

        fetch(event.target.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                if (json.body) {
                    json.body = JSON.parse(json.body);
                }
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    setGistList = (json) => {
        console.log('parsed json', json);
        this.setState(foo => {
            return {gistList: json.result}
        });
    };

    fetchGistList = event => {
        const that = this;

        fetch(event.target.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                that.setGistList(json)
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <div className="App">
                <ElfHeader />
                <div className="App-intro">
                    <p>
                        state: {this.state.status} file: {this.state.file}
                    </p>
                    <p>
                        result: {this.state.result} server: {this.state.server}
                    </p>
                    <p>login: {this.state.body.login}</p>
                    <p>id: {this.state.body.id}</p>
                    <p>node_id: {this.state.body.node_id}</p>
                    <p>name: {this.state.body.name}</p>
                </div>
                <TestRoutes queryServer={this.queryServer} />
                <Qux queryServer={this.queryServer} />
                <GetUser queryServer={this.queryServer} />
                <br/>
                <div>
                    <GetGist queryServer={this.queryServer}
                             fetchGistList={this.fetchGistList}
                             gistList={this.state.gistList}
                    />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    queryServer: PropTypes.func
};

export default App;
