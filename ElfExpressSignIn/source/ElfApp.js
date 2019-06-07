import React, {Component} from 'react';

class ElfApp extends Component {

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

    setData = (json) => {
        console.log(json);
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

    login = () => {
        window.open('elf-sign-in.html')
    };

    render() {
        return (
            <div>
                <h1>Welcome to Elf App</h1>
                <button onClick={this.login}>Login</button>
                <button data-url="/test-verify" onClick={this.queryServerLogin}>Verify</button>
                <a href="/worker?title=FirebaseLogin">Logout</a>
            </div>
        );
    }
}

export default ElfApp;
