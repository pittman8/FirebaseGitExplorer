import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';
import 'whatwg-fetch';
import { Qux } from './Qux';
import GetGist from './GetGist';
import { TestRoutes } from './TestRoutes';
import GetUser from './GetUser';
import GetRepos from './GetRepos';
import ElfHeader from './ElfHeader';
import { BrowserRouter, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './elf-styles';
import { ShowResultServer } from './ShowResultServer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FirebaseLogout } from "./FirebaseLogout";

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
                that.setState(json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    setGistList = json => {
        console.log('parsed json', json);
        this.setState(function() {
            return { gistList: json.result };
        });
    };

    fetchGistList = event => {
        const that = this;

        fetch(event.currentTarget.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                that.setGistList(json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    setRepoList = newRepoList => {
        console.log('retrieved repos: ', newRepoList);
        this.setState({
            repoList: newRepoList
        });
    };

    fetchRepoList = event => {
        const that = this;
        let id = event.currentTarget.id;
        let newRepoList = [];
        console.log('fetchRepoList()', id);
        fetch(event.currentTarget.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                if (id === 'private') {
                    // private repos
                    console.log('These are private repos');
                    for (let i = 0; i < json.result.length; i++) {
                        if (json.result[i].private === true) {
                            newRepoList.push(json.result[i]);
                        }
                    }
                } else if (id === 'public') {
                    // public repos
                    console.log('These are public repos');
                    for (let i = 0; i < json.result.length; i++) {
                        if (json.result[i].private !== true) {
                            newRepoList.push(json.result[i]);
                        }
                    }
                } else {
                    // all repos
                    for (let i = 0; i < json.result.length; i++) {
                        newRepoList.push(json.result[i]);
                    }
                }

                that.setRepoList(newRepoList);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    setData = (json) => {
        console.log(json);
    };

    getFirebaseToken = () => {
        return new Promise((resolve, reject) => {
            if (!window.firebase.auth().currentUser) {
                this.setData({ result: 'You need to log in.' });
                reject({ result: 'You need to log in (env export?).' });
            }
            window.firebase
                .auth()
                .currentUser.getIdToken(/* forceRefresh */ true)
                .then(idToken => {
                    resolve({ token: idToken });
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    queryServerLogin = event => {
        const url = event.currentTarget.dataset.url;
        this.getFirebaseToken()
            .then(response => {
                console.log('TOKEN', response.token);
                // Send token to your backend via HTTPS
                fetch(url + '?token=' + response.token)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(json => {
                        if (json.body) {
                            json.body = JSON.parse(json.body);
                        }
                        this.setState(json);
                        this.setData(json);
                    })
                    .catch(function(ex) {
                        console.log('parsing failed, URL bad, network down, or similar', ex);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        const { classes } = this.props;
        return (
            <BrowserRouter>
                <div className="App">
                    <ElfHeader />
                    <br />
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <ShowResultServer
                                result={this.state.result}
                                server={this.state.server}
                            />
                        </Paper>
                    </Grid>
                    <br />
                    <Route
                        path="/test-routes"
                        render={props => (
                            <TestRoutes
                                {...props}
                                queryServer={this.queryServer}
                            />
                        )}
                    />

                    <Route
                        path="/qux"
                        render={props => (
                            <Qux {...props} queryServerLogin={this.queryServerLogin} />
                        )}
                    />

                    <Route
                        path="/get-user"
                        render={props => (
                            <GetUser
                                {...props}
                                queryServerLogin={this.queryServerLogin}
                                body={this.state.body}
                            />
                        )}
                    />

                    <Route
                        path="/get-user-repos"
                        render={props => (
                            <GetRepos
                                {...props}
                                queryServer={this.queryServer}
                                fetchRepoList={this.fetchRepoList}
                                repoList={this.state.repoList}
                            />
                        )}
                    />

                    <Route
                        path="/get-gist"
                        render={props => (
                            <GetGist
                                {...props}
                                queryServerLogin={this.queryServerLogin}
                                fetchGistList={this.fetchGistList}
                                gistList={this.state.gistList}
                            />
                        )}
                    />
                    <Route
                        path="/firebaseLogout"
                        component={ FirebaseLogout }
                    />

                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    queryServer: PropTypes.func,
    fetchGistList: PropTypes.func,
    setGistList: PropTypes.func,
    setRepoList: PropTypes.func,
    fetchRepoList: PropTypes.func,
    appInit: PropTypes.object,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
