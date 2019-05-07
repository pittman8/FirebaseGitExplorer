import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appInit } from './app-init';

export class GetGist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
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

    fetchGistList = event => {
        const that = this;

        fetch(event.target.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json.result[0]);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    setGistList = event => {

    };

    render() {
        return(
            <div className="App">
                <h1 className="App-header">Get Gist Component</h1>
                <br/>
                <div className="App-intro">
                    <p>
                        result: {appInit.result}
                    </p>
                    <p>
                        gistID: {appInit.gistList[0].id}
                    </p>
                    <button data-url="/git-gist-you-rang" onClick={this.queryServer}>Ring GitGist</button>
                    <button data-url="/git-gist-get-gist-list" onClick={this.fetchGistList}>Get Gist List</button>
                    <button onClick={this.setGistList}>Prev</button>
                    <button onClick={this.setGistList}>Next</button>
                </div>
            </div>
        );
    }

}

GetGist.propTypes = {
    queryServer: PropTypes.func
};