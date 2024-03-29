import React from 'react';
import PropTypes from 'prop-types';

export const TestRoutes = ({ queryServer }) => (
    <button data-url="/api/foo" onClick={queryServer}>
        Test Foo Route
    </button>
);

TestRoutes.propTypes = {
    queryServer: PropTypes.func
};
