import React from 'react';
import PropTypes from 'prop-types';

export const TestRoutes = ({ queryServerLogin }) => (
    <button data-url="/test-routes/api/foo" onClick={queryServerLogin}>
        Test Foo Route
    </button>
);

TestRoutes.propTypes = {
    queryServer: PropTypes.func
};
