import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import '../css/App.css';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './elf-styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ShowResultServer } from './ShowResultServer';

class GetGist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    setData = x => {
        let index = this.state.index;
        let nextIndex = index;
        let first = this.props.gistList.length - 1;
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
                                Get Gist Component
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <ShowResultServer
                                result={this.props.result}
                                server={this.props.server}
                            />
                        </Paper>
                        <Paper className={classes.paperLion}>
                            <Button
                                variant="contained"
                                color="primary"
                                data-url="/get-gist/you-rang"
                                onClick={this.props.queryServerLogin}
                            >
                                Ring Git Gist
                            </Button>
                        </Paper>
                    </Grid>
                    <Paper className={classes.paperLion}>
                        <div className={classes.layout}>
                            <Typography id="description" variant="h6">
                                description:{' '}
                                {
                                    this.props.gistList[this.state.index]
                                        .description
                                }
                            </Typography>
                            <Typography id="id" variant="h6">
                                gistID:{' '}
                                {this.props.gistList[this.state.index].id}
                            </Typography>
                            <Typography id="ownerLogin" variant="h6">
                                owner login:{' '}
                                {
                                    this.props.gistList[this.state.index]
                                        .ownerLogin
                                }
                            </Typography>
                            <Typography id="gitPullUrl" variant="h6">
                                gitPullUrl:{' '}
                                {
                                    this.props.gistList[this.state.index]
                                        .gitPullUrl
                                }
                            </Typography>
                            <Typography id="files" variant="h6">
                                files:{' '}
                                {this.props.gistList[this.state.index].files}
                            </Typography>
                            <img
                                src={this.props.gistList[0].avatarUrl}
                                alt={'unknown'}
                                height="200"
                                width="200"
                            />
                        </div>
                    </Paper>
                    <br />
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <Button
                                id="fetch"
                                variant="contained"
                                color="primary"
                                data-url="/get-gist/get-gist-list"
                                onClick={this.props.fetchGistList}
                            >
                                Fetch Gist List
                            </Button>
                            <Button
                                id="prev"
                                variant="contained"
                                color="primary"
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
                                onClick={event =>
                                    this.setData(1, this.setData(), event)
                                }
                            >
                                Next
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

GetGist.propTypes = {
    setData: PropTypes.func,
    queryServerLogin: PropTypes.func,
    fetchGistList: PropTypes.func,
    gistList: PropTypes.array,
    classes: PropTypes.object.isRequired,
    result: PropTypes.string,
    server: PropTypes.object
};

export default withStyles(styles)(GetGist);
