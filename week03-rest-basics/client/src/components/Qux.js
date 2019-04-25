import PropTypes from 'prop-types';
import React from "react";

export const Qux = ({queryServer}) => (
    <button data-url="/qux-you-rang" onClick={queryServer}>Ring Qux</button>
);

Qux.propTypes = {
    queryServer: PropTypes.func
};