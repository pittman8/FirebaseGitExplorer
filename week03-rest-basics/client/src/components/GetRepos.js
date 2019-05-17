import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

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

class GetRepos extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="App">
                <Paper className={classes.paper}>
                    <Typography
                        className={classes.typography}
                        variant="h5"
                        gutterBottom
                    >
                        Get Repositories
                    </Typography>
                </Paper>
                <br/>
                <div className="App-intro">
                    <Paper>
                        <Button
                            variant="contained"
                            color="primary"
                            data-url="/git-user-you-rang"
                            onClick={this.props.queryServer}>
                            Ring Git User
                        </Button>
                    </Paper>
                    <Paper>
                        <p>name: </p>
                        <p>full name: </p>
                        <p>html_url: </p>
                        <p>owner login: </p>
                        <p>owner url: </p>

                    </Paper>
                </div>
            </div>
        );
    }
}

GetRepos.propTypes = {
    queryServer: PropTypes.func,
    classes: PropTypes.object.isRequired
};

const GetRepos = withStyles(styles)(GetRepos);

export { GetRepos };