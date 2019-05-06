import React from 'react';
import PropTypes from 'prop-types';

export const GetUser = ({ queryServer }) => (
    <div className="Component">
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
