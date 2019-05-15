import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 5,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.secondary.light
    },
    typography: {
        color: theme.palette.primary.dark
    },
    button: {
        margin: theme.spacing.unit
    }
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            address: {
                firstName: 'unknown',
                lastName: 'unknown',
                state: 'unknown'
            }
        };
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({
            address: {
                firstName: 'Patty',
                lastName: 'Murray',
                state: 'Washington'
            }
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24} justify="center">
                    <Paper className={classes.paper}>
                        <Typography
                            className={classes.typography}
                            variant="h5"
                            gutterBottom
                        >
                            Welcome to Elf Address
                        </Typography>
                    </Paper>
                </Grid>

                <Grid container spacing={24} justify="center">
                    <Paper className={classes.paper}>
                        <Grid item xs>
                            <Typography
                                className={classes.typography}
                                variant="body1"
                                gutterBottom
                            >
                                First Name: {this.state.address.firstName}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography
                                className={classes.typography}
                                variant="body1"
                                gutterBottom
                            >
                                Last Name: {this.state.address.lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography
                                className={classes.typography}
                                variant="body1"
                                gutterBottom
                            >
                                State: {this.state.address.state}
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid container spacing={24} justify="center">
                    <Paper className={classes.paper}>
                        <Button
                            id="getFileAction"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.getFile}
                        >
                            Get File
                        </Button>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
