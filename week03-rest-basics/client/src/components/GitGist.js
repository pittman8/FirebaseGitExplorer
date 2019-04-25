import React from "react";
import PropTypes from 'prop-types';

export const GitGist = ({queryServer}) => (
    <button data-url="/git-gist-you-rang" onClick={queryServer}>Ring GitGist</button>
);

GitGist.propTypes = {
    queryServer: PropTypes.func
};