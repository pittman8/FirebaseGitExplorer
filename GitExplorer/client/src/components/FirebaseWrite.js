import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core";
import {styles} from "./elf-styles";

class FirebaseWrite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: 'none',
            result: 'unknown',
            stack: 'none',
            items: [{id: -4, data: 'none'}]
        }
    }

    runQuery = (event) => {
        const url = event.currentTarget.dataset.url;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(result => {
                console.log('FETCH RESULT', result);
                this.setState(result);
            })
            .catch(ex => {
                console.log(ex);
                this.setState({error: ex.message, stack: ex.stack});
            })
    };
    render() {
        let currentUser = window.firebase.auth().currentUser;
        if (!currentUser) {
            currentUser = {
                displayName: 'unknown',
                email: 'unknown',
                providerId: 'unknown',
                photoURL: 'unknown'
            };
        }
        return (
            <div>
                <Paper>
                    <Typography variant="h5">Write User Information to Database</Typography>
                </Paper>
                <br/>
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

                    <img
                        src={currentUser.photoURL}
                        alt="user"
                        width="100"
                        height="100"
                    />
                </Paper>
                <Paper>
                    <Button
                        variant="contained"
                        color="primary"
                        data-url="/you-rang"
                        onClick={this.runQuery}
                    >
                        Write User
                    </Button>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(FirebaseWrite);
