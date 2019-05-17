import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';
import 'whatwg-fetch';
import { Qux } from './Qux';
import { GetGist } from './GetGist';
import { TestRoutes } from './TestRoutes';
import { GetUser } from './GetUser';
import { GetRepos } from './GetRepos';
import ElfHeader from './ElfHeader';
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = props.appInit;
    }

    queryServer = event => {
        const that = this;

        fetch(event.currentTarget.dataset.url)
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

        fetch(event.currentTarget.dataset.url)
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
            <BrowserRouter>
                <div className="App">
                    <ElfHeader />
                    <div className="App-intro">
                        <p>
                            state: {this.state.status} file: {this.state.file}
                        </p>
                        <p>
                            result: {this.state.result} server: {this.state.server}
                        </p>
                    </div>

                    <Route
                        path="/test-routes"
                        render={(props)=> (
                            <TestRoutes {...props}
                                 queryServer={this.queryServer} />
                        )}
                    />

                    <Route
                        path="/qux"
                        render={(props)=> (
                            <Qux {...props}
                                queryServer={this.queryServer} />
                        )}
                    />

                    <Route
                        path="/get-user"
                        render={(props)=> (
                            <GetUser {...props}
                                 queryServer={this.queryServer}
                                 body={this.state.body} />
                        )}
                    />

                    <Route
                        path="/get-user-repos"
                        render={(props)=> (
                            <GetRepos {...props}
                                     queryServer={this.queryServer} />
                        )}
                    />

                    <Route
                        path="/get-gist"
                        render={(props) => (
                            <GetGist {...props}
                                 queryServer={this.queryServer}
                                 fetchGistList={this.fetchGistList}
                                 gistList={this.state.gistList} />
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    queryServer: PropTypes.func,
    fetchGistList: PropTypes.func,
    setGistList: PropTypes.func
};

export default App;
