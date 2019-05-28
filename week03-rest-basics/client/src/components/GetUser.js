import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './elf-styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class GetUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <Typography variant="h4">
                                Get User Component
                            </Typography>
                        </Paper>
                    </Grid>
                    <br/>
                    <Paper className={classes.paperLion}>
                        <div className={ classes.layout }>
                            <Typography id="login" variant="h6">login: {this.props.body.login}</Typography>
                            <Typography id="id" variant="h6">id: {this.props.body.id}</Typography>
                            <Typography id="node_id" variant="h6">node_id: {this.props.body.node_id}</Typography>
                            <Typography id="name" variant="h6">name: {this.props.body.name}</Typography>
                        </div>
                    </Paper>
                    <br/>
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <Button
                                variant="contained"
                                color="primary"
                                data-url="/git-user-you-rang"
                                onClick={this.props.queryServer}>
                                Ring Get User
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                data-url="/git-user-get-user"
                                onClick={this.props.queryServer}>
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
    queryServer: PropTypes.func
};

export default withStyles(styles)(GetUser);
