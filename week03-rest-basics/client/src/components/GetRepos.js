import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

// const styles = theme => ({
//     root: {
//         flexGrow: 1
//     },
//     paper: {
//         padding: theme.spacing.unit * 5,
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         backgroundColor: theme.palette.secondary.light
//     },
//     typography: {
//         color: theme.palette.primary.dark
//     },
//     button: {
//         margin: theme.spacing.unit
//     }
// });

export class GetRepos extends Component {
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
    }

    render() {
        return (
            <div className="App">
                    <Button
                        variant="contained"
                        color="primary"
                        data-url="/git-user-you-rang"
                        onClick={this.props.queryServer}>
                        Ring Git User
                    </Button>
                <br/> <br/>
                <div className="App-intro">
                    <Paper>
                        <Typography
                            variant="h5"
                            gutterBottom
                        >
                            Get Repositories
                        </Typography>
                    </Paper>
                    <Paper>
                        <p>name: {this.props.repoList[this.state.index].name}</p>
                        <p>full name: {this.props.repoList[this.state.index].full_name}</p>
                        <p>html_url: {this.props.repoList[this.state.index].html_url}</p>
                        <p>owner login: {this.props.repoList[this.state.index].ownerLogin}</p>
                        <p>owner url: {this.props.repoList[this.state.index].ownerUrl}</p>

                        <Button
                            id="prev"
                            variant="contained"
                            color="primary"
                            onClick={event =>
                                this.setData(0, this.setData(), event)
                            }>
                            Prev
                        </Button>
                        <Button
                            id="next"
                            variant="contained"
                            color="primary"
                            onClick={event =>
                                this.setData(1, this.setData(), event)
                            }>
                            Next
                        </Button>
                    </Paper>
                    <br/>
                    <Paper>
                        <Button
                            id="private"
                            variant="contained"
                            color="primary"
                            // onClick={event =>
                            //     this.setData(0, this.setData(), event)
                            // }
                        >
                            Private
                        </Button>
                        <Button
                            id="public"
                            variant="contained"
                            color="primary"
                            // onClick={event =>
                            //     this.setData(1, this.setData(), event)}
                        >
                            Public
                        </Button>
                        <Button
                            id="all"
                            variant="contained"
                            color="primary"
                            // onClick={event =>
                            //     this.setData(1, this.setData(), event)}
                        >
                            All
                        </Button>
                    </Paper>
                    <br/>
                </div>
            </div>
        );
    }
}

GetRepos.propTypes = {
    queryServer: PropTypes.func
    //classes: PropTypes.object.isRequired
};

//export default withStyles(styles)(GetRepos);