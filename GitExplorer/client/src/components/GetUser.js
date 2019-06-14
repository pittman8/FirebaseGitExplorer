import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './elf-styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {ShowResultServer} from "./ShowResultServer";

class GetUser extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <Typography variant="h4">
                                Get User Component
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
                                data-url="/users/git-user-you-rang"
                                onClick={this.props.queryServerLogin}
                            >
                                Ring Get User
                            </Button>
                        </Paper>
                    </Grid>
                    <Paper className={classes.paperLion}>
                        <div className={classes.layout}>
                            <Typography id="login" variant="h6">
                                login: {this.props.body.login}
                            </Typography>
                            <Typography id="name" variant="h6">
                                name: {this.props.body.name}
                            </Typography>
                            <Typography id="bio" variant="h6">
                                bio: {this.props.body.bio}
                            </Typography>
                            <Typography id="location" variant="h6">
                                location: {this.props.body.location}
                            </Typography>
                            <Typography id="url" variant="h6">
                                url: {this.props.body.url}
                            </Typography>
                            <Typography id="id" variant="h6">
                                id: {this.props.body.id}
                            </Typography>
                            <Typography id="node_id" variant="h6">
                                node_id: {this.props.body.node_id}
                            </Typography>

                            <img
                                src={this.props.body.avatar_url}
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
                                variant="contained"
                                color="primary"
                                data-url="/users/git-user-get-user"
                                onClick={this.props.queryServerLogin}
                            >
                                Get User
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

GetUser.propTypes = {
    queryServerLogin: PropTypes.func,
    body: PropTypes.object,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GetUser);
