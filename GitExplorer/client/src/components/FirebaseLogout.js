import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export const FirebaseLogout = function() {
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

    return (
        <div>
            <Paper>
                <Typography variant="h5">
                    Current User Information
                </Typography>
            </Paper>
            <br />
            <Paper>
                <Typography variant="body1" gutterBottom>
                    Name: {currentUser.displayName || 'logged out'}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Email: {currentUser.email}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Provider ID: {currentUser.providerId}
                </Typography>

                <img src={currentUser.photoURL} alt="user" width="100" height="100" />
            </Paper>
            <Paper>
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