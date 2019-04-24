import React from "react";

export const TestRoutes = ({queryServer}) => (
    <button data-url="/api/foo" onClick={queryServer}>Test Foo Route</button>
);