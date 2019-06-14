import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { styles } from './elf-styles';
import Grid from '@material-ui/core/Grid';

class GetRepos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    setData = x => {
        let index = this.state.index;
        let nextIndex = index;
        let first = this.props.repoList.length - 1;
        if (x === 0) {
            if (index !== 0) {
                nextIndex = nextIndex - 1;
            } else {
                nextIndex = first;
            }
        } else if (x === 1) {
            if (index !== first) {
                nextIndex = nextIndex + 1;
            } else {
                nextIndex = 0;
            }
        }

        this.setState({ index: nextIndex });
    };

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <Typography variant="h4">
                                Get Repos Component
                            </Typography>
                        </Paper>
                    </Grid>
                    <br />
                    <Paper className={classes.paperLion}>
                        <div className={classes.layout}>
                            <Typography id="name" variant="h6">
                                {' '}
                                name:{' '}
                                {
                                    this.props.repoList[this.state.index].name
                                }{' '}
                            </Typography>
                            <Typography id="full_name" variant="h6">
                                {' '}
                                full name:{' '}
                                {
                                    this.props.repoList[this.state.index]
                                        .full_name
                                }{' '}
                            </Typography>
                            <Typography id="html" variant="h6">
                                {' '}
                                html_url:{' '}
                                {
                                    this.props.repoList[this.state.index]
                                        .html_url
                                }{' '}
                            </Typography>
                            <Typography id="login" variant="h6">
                                {' '}
                                owner login:{' '}
                                {
                                    this.props.repoList[this.state.index].owner
                                        .login
                                }{' '}
                            </Typography>
                            <Typography id="url" variant="h6">
                                {' '}
                                owner url:{' '}
                                {
                                    this.props.repoList[this.state.index].owner
                                        .url
                                }{' '}
                            </Typography>
                            <Typography id="private" variant="h6">
                                {' '}
                                private:{' '}
                                {this.props.repoList[
                                    this.state.index
                                ].private.toString()}{' '}
                            </Typography>
                        </div>
                    </Paper>
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <Button
                                variant="contained"
                                color="primary"
                                data-url="/users/git-user-you-rang"
                                onClick={this.props.queryServerLogin}
                            >
                                Ring Git User
                            </Button>

                            <Button
                                id="prev"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={event =>
                                    this.setData(0, this.setData(), event)
                                }
                            >
                                Prev
                            </Button>
                            <Button
                                id="next"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={event =>
                                    this.setData(1, this.setData(), event)
                                }
                            >
                                Next
                            </Button>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <Button
                                id="private"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                data-url="/users/git-user-get-user-repos"
                                onClick={event =>
                                    this.props.fetchRepoList(event)
                                }
                            >
                                Private
                            </Button>
                            <Button
                                id="public"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                data-url="/users/git-user-get-user-repos"
                                onClick={event =>
                                    this.props.fetchRepoList(event)
                                }
                            >
                                Public
                            </Button>
                            <Button
                                id="all"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                data-url="/users/git-user-get-user-repos"
                                onClick={event =>
                                    this.props.fetchRepoList(event)
                                }
                            >
                                All
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

GetRepos.propTypes = {
    queryServerLogin: PropTypes.func,
    classes: PropTypes.object.isRequired,
    fetchRepoList: PropTypes.func,
    repoList: PropTypes.array
};

export default withStyles(styles)(GetRepos);
