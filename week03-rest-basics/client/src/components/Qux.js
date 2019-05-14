import React from 'react';
import PropTypes from 'prop-types';

export const Qux = ({ queryServer }) => (
    <button data-url="/qux-you-rang" onClick={queryServer}>
        Ring Qux
    </button>
);

Qux.propTypes = {
    queryServer: PropTypes.func
};
