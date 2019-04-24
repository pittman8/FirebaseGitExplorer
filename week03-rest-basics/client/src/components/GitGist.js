import React from "react";

export const GitGist = ({queryServer}) => (
    <button data-url="/git-gist-you-rang" onClick={queryServer}>Ring GitGist</button>
);