import React from "react";
import PropTypes from 'prop-types';

export const GitUserYouRang = ({queryServer}) => (
    <button data-url="/git-user-you-rang" onClick={queryServer}>Ring Git User</button>
);

export const GitUserGetUser = ({queryGitHub}) => (
    <button data-url="/git-api/git-user-get-user" onClick={queryGitHub}>Get User</button>
);

GitUserYouRang.propTypes = {
    queryServer: PropTypes.func
};

GitUserGetUser.propTypes = {
    queryGitHub: PropTypes.func
};

