import React from "react";
import PropTypes from 'prop-types';

export const GitUser = ({queryServer}) => (
    <div className="Component">
        <button data-url="/git-user-you-rang" onClick={queryServer}>Ring Git User</button>
        <button data-url="/git-user-get-user" onClick={queryServer}>Get User</button>
    </div>
);

GitUser.propTypes = {
    queryServer: PropTypes.func
};
