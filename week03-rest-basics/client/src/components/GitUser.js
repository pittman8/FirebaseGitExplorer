import React from "react";

export const GitUserYouRang = ({queryServer}) => (
    <button data-url="/git-user-you-rang" onClick={queryServer}>Ring Git User</button>
);

export const GitUserGetUser = ({queryGitHub}) => (
    <button data-url="/git-user-get-user" onClick={queryGitHub}>Get User</button>
);