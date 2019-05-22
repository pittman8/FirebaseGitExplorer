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
        color: theme.palette.text.secondary
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
            index: 0,
        };
    }

    setData = (x) => {
        let index = this.state.index;
        let nextIndex = index;
        let first = this.props.repoList.length - 1;
        if (x===0) {
            if (index!==0) {
                nextIndex = nextIndex - 1;
            } else {
                nextIndex = first};

        } else if (x===1) {
            if (index!==first) {
                nextIndex=nextIndex + 1;
            } else {
                nextIndex = 0};
        };

        this.setState({index: nextIndex});
    };

    handlePrivate = () => {
        let isPrivate = this.props.repoList[this.state.index].private;
        this.setState({ isPrivate: true },() => {
            console.log(isPrivate);
        });
    };

    handlePublic = () => {
        let isPrivate = this.props.repoList[this.state.index].private;
        console.log(isPrivate);
        this.setState({ isPrivate: false },() => {
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                    <Button
                        variant="contained"
                        color="primary"
                        data-url="/git-user-you-rang"
                        onClick={this.props.queryServer}>
                        Ring Git User
                    </Button>

                <div className={classes.root}>
                    <br />
                    <Paper className={classes.paper}>
                        <Typography
                            className={classes.typography}
                            variant="h5"
                            gutterBottom
                        >
                            Get Repositories
                        </Typography>
                    </Paper>

                    <Paper className={classes.paper}>
                        <p>name: {this.props.repoList[this.state.index].name}</p>
                        <p>full name: {this.props.repoList[this.state.index].full_name}</p>
                        <p>html_url: {this.props.repoList[this.state.index].html_url}</p>
                        <p>owner login: {this.props.repoList[this.state.index].owner.login}</p>
                        <p>owner url: {this.props.repoList[this.state.index].owner.url}</p>
                        <p>private: {(this.props.repoList[this.state.index].private).toString()}</p>

                        <Button
                            id="prev"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={event =>
                                this.setData(0, this.setData(), event)
                            }>
                            Prev
                        </Button>
                        <Button
                            id="next"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={event =>
                                this.setData(1, this.setData(), event)
                            }>
                            Next
                        </Button>
                    </Paper>

                    <Paper className={classes.paper}>
                        <Button
                            id="private"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.handlePrivate }
                        >
                            Private
                        </Button>
                        <Button
                            id="public"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.handlePublic }
                        >
                            Public
                        </Button>
                        <Button
                            id="all"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.props.fetchRepoList}
                        >
                            All
                        </Button>
                    </Paper>
                </div>
            </div>
        );
    }
}

GetRepos.propTypes = {
    queryServer: PropTypes.func,
    classes: PropTypes.object.isRequired,
    fetchRepoList: PropTypes.func
};

export default withStyles(styles)(GetRepos);