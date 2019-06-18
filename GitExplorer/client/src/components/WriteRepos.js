import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import '../css/App.css';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './elf-styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class WriteRepos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            repository: [
                {
                    name: 'unknown',
                    full_name: 'unknown',
                    html_url: 'unknown',
                    private: 'unknown',
                    created_at: 'unknown'
                }
            ]
        };
    }

    runBatchRead = event => {
        const url = event.currentTarget.dataset.url;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.setState({ repository: result });
            })
            .catch(ex => {
                console.log(ex);
                this.setState({ error: ex.message, stack: ex.stack });
            });
    };

    setData = x => {
        let index = this.state.index;
        let nextIndex = index;
        let first = this.state.repository.length - 1;
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
                                Write Repos Component
                            </Typography>
                        </Paper>
                    </Grid>
                    <Paper className={classes.paperLion}>
                        <div className={classes.layout}>
                            <Typography id="name" variant="h6">
                                Name:{' '}
                                {this.state.repository[this.state.index].name}
                            </Typography>
                            <Typography id="full_name" variant="h6">
                                Full Name:{' '}
                                {
                                    this.state.repository[this.state.index]
                                        .full_name
                                }
                            </Typography>
                            <Typography id="private" variant="h6">
                                Private:{' '}
                                {this.state.repository[
                                    this.state.index
                                ].private.toString()}
                            </Typography>
                            <Typography id="html_url" variant="h6">
                                HtmlUrl:{' '}
                                {
                                    <a
                                        href={
                                            this.state.repository[
                                                this.state.index
                                            ].html_url
                                        }
                                    >
                                        {
                                            this.state.repository[
                                                this.state.index
                                            ].html_url
                                        }
                                    </a>
                                }
                            </Typography>
                            <Typography id="created_at" variant="h6">
                                Created on:{' '}
                                {this.state.repository[
                                    this.state.index
                                ].created_at.toString()}
                            </Typography>
                        </div>
                    </Paper>
                    <br />
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <Button
                                id="writeGists"
                                variant="contained"
                                color="primary"
                                data-url="/get-user/write-repos"
                                onClick={this.props.queryServerLogin}
                            >
                                Write Repos
                            </Button>
                            <Button
                                id="readGists"
                                variant="contained"
                                color="primary"
                                data-url="/get-user/read-repos"
                                onClick={this.runBatchRead}
                            >
                                Read Repos
                            </Button>
                            <br />
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

WriteRepos.propTypes = {
    setData: PropTypes.func,
    queryServerLogin: PropTypes.func,
    runBatchRead: PropTypes.func,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WriteRepos);
