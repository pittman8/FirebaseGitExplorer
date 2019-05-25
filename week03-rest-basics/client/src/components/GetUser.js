import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './elf-styles';

const GetUser = ({ queryServer, body }) => (
    <div className="App-intro">
        <p>login: {body.login}</p>
        <p>id: {body.id}</p>
        <p>node_id: {body.node_id}</p>
        <p>name: {body.name}</p>

        <button data-url="/git-user-you-rang" onClick={queryServer}>
            Ring Get User
        </button>
        <button data-url="/git-user-get-user" onClick={queryServer}>
            Get User
        </button>
    </div>
);

GetUser.propTypes = {
    queryServer: PropTypes.func
};

export default withStyles(styles)(GetUser);
