import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";

export const FirebaseLogin = function({ queryServerLogin }) {
    let currentUser = window.firebase.auth().currentUser;

    if (!currentUser) {
        currentUser = {
            displayName: 'unknown',
            email: 'unknown',
            providerId: 'unknown',
            photoURL: 'unknown'
        }
    }
    
    function signOut() {
        window.firebase
            .auth()
            .signOut()
            .then(
                function() {
                    console.log('Signed Out');
                    window.location.href = '/';
                },
                function(error) {
                    console.error('Sign Out Error', error);
                }
            );
    }

    function login () {
        window.open('elf-sign-in.html')
    };

    return (
        <div>
            <Typography variant="body1" gutterBottom>
                {currentUser.displayName || 'logged out'}
            </Typography>

            <Typography variant="body1" gutterBottom>
                {currentUser.email}
            </Typography>

            <Typography variant="body1" gutterBottom>
                {currentUser.providerId}
            </Typography>

            <img src={currentUser.photoURL} alt="user" width="100" height="100" />
            <Paper>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={login}
                >
                    Login
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    data-url="/test-verify"
                    onClick={queryServerLogin}
                >
                    Verify
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    data-url="/git-gist-you-rang"
                    onClick={signOut}
                >
                    Log Out
                </Button>
            </Paper>
        </div>
    );
};

FirebaseLogin
    .propTypes = {
    queryServerLogin: PropTypes.func
};