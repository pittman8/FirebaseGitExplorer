import React from 'react';
import PropTypes from 'prop-types';

export const GitGist = ({ queryServer, fetchGistList, gistList}) => (
    <div>
        <p>ID: {gistList.id}</p>
        <button data-url="/git-gist-you-rang" onClick={queryServer}>Ring GitGist</button>
        <button data-url="/git-gist-get-gist-list" onClick={fetchGistList}>Get Gist List</button>
    </div>
);

GitGist.propTypes = {
    queryServer: PropTypes.func
};
