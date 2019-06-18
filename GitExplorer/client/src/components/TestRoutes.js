import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ShowResultServer } from './ShowResultServer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { styles } from './elf-styles';

class TestRoutes extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paperLion}>
                            <Typography variant="h4">
                                Test Routes Component
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
                    </Grid>
                    <Paper className={classes.paperLion}>
                        <Button
                            variant="contained"
                            color="primary"
                            data-url="/test-routes/api/foo"
                            onClick={this.props.queryServerLogin}
                        >
                            Test Foo Route
                        </Button>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
}

TestRoutes.propTypes = {
    queryServerLogin: PropTypes.func,
    classes: PropTypes.object.isRequired,
    result: PropTypes.object,
    server: PropTypes.object
};

export default withStyles(styles)(TestRoutes);
