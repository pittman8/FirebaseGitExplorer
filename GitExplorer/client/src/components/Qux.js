import React from 'react';
import PropTypes from 'prop-types';

export const Qux = ({ queryServerLogin }) => (
    <button data-url="/qux/qux-you-rang" onClick={queryServerLogin}>
        Ring Qux
    </button>
);

Qux.propTypes = {
    queryServer: PropTypes.func
};
