(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        104: function(e, t, a) {
            e.exports = a.p + 'static/media/watermelon.dbc806b0.svg';
        },
        114: function(e, t, a) {
            e.exports = a(250);
        },
        119: function(e, t, a) {},
        250: function(e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                r = a.n(n),
                i = a(30),
                o = a.n(i);
            a(119),
                Boolean(
                    'localhost' === window.location.hostname ||
                        '[::1]' === window.location.hostname ||
                        window.location.hostname.match(
                            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                        )
                );
            var l = a(21),
                s = a(22),
                c = a(24),
                u = a(23),
                m = a(43),
                p = a(25),
                d = (a(57), a(120), a(7)),
                g = a.n(d),
                h = a(5),
                E = a.n(h),
                v = function(e) {
                    var t = e.result,
                        a = e.server;
                    return r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(
                            'p',
                            { className: 'App-intro' },
                            'result: ',
                            t
                        ),
                        r.a.createElement(
                            'p',
                            { className: 'App-intro' },
                            'server: ',
                            a
                        )
                    );
                },
                b = a(3),
                f = a.n(b),
                w = a(9),
                y = a.n(w),
                k = a(20),
                L = a(53),
                x = a(69),
                O = a(98),
                j = a.n(O),
                N = function(e) {
                    return {
                        root: { flexGrow: 1 },
                        rooter: Object(x.a)({}, e.mixins.gutters(), {
                            paddingTop: 2 * e.spacing.unit,
                            paddingBottom: 2 * e.spacing.unit
                        }),
                        layout: Object(L.a)(
                            {
                                width: 'auto',
                                marginLeft: 3 * e.spacing.unit,
                                marginRight: 3 * e.spacing.unit
                            },
                            e.breakpoints.up(1100 + 3 * e.spacing.unit * 2),
                            {
                                width: 1100,
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }
                        ),
                        backDiv: { height: '100%' },
                        backDiv2: {
                            height: '1000px',
                            backgroundImage: 'url('.concat(j.a, ')'),
                            backgroundRepeat: 'repeat'
                        },
                        backDiv3: { backgroundColor: '#ddf3ff' },
                        paperLion: {
                            flexGrow: 1,
                            padding: e.spacing.unit,
                            textAlign: 'center',
                            color: e.palette.primary.dark,
                            backgroundColor: '#cce2ee'
                        },
                        paperLion2: {
                            height: '56%',
                            width: '100%',
                            maxWidth: '500px',
                            padding: '1%',
                            color: e.palette.primary.dark,
                            backgroundColor: e.palette.grey
                        },
                        paper: {
                            padding: 5 * e.spacing.unit,
                            textAlign: 'center',
                            color: e.palette.primary.dark
                        },
                        paperHome: Object(x.a)({}, e.mixins.gutters(), {
                            paddingTop: 2 * e.spacing.unit,
                            paddingBottom: 2 * e.spacing.unit
                        }),
                        elfTypography: { fontSize: 2 * e.spacing.unit },
                        containerDiv: { flexGrow: 1 }
                    };
                },
                S = (function(e) {
                    function t() {
                        return (
                            Object(l.a)(this, t),
                            Object(c.a)(
                                this,
                                Object(u.a)(t).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(p.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props.classes;
                                    return r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(
                                            g.a,
                                            { container: !0, spacing: 24 },
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: e.paperLion },
                                                    r.a.createElement(
                                                        f.a,
                                                        { variant: 'h4' },
                                                        'Qux Component'
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: e.paperLion },
                                                    r.a.createElement(v, {
                                                        result: this.props
                                                            .result,
                                                        server: this.props
                                                            .server
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                E.a,
                                                { className: e.paperLion },
                                                r.a.createElement(
                                                    y.a,
                                                    {
                                                        variant: 'contained',
                                                        color: 'primary',
                                                        'data-url':
                                                            '/qux/qux-you-rang',
                                                        onClick: this.props
                                                            .queryServerLogin
                                                    },
                                                    'Ring Qux'
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component),
                C = Object(k.withStyles)(N)(S),
                R = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            Object(l.a)(this, t),
                            ((a = Object(c.a)(
                                this,
                                Object(u.a)(t).call(this, e)
                            )).setData = function(e) {
                                var t = a.state.index,
                                    n = t,
                                    r = a.props.gistList.length - 1;
                                0 === e
                                    ? 0 !== t
                                        ? (n -= 1)
                                        : (n = r)
                                    : 1 === e && (t !== r ? (n += 1) : (n = 0)),
                                    a.setState({ index: n });
                            }),
                            (a.state = { index: 0 }),
                            a
                        );
                    }
                    return (
                        Object(p.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props.classes;
                                    return r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(
                                            g.a,
                                            { container: !0, spacing: 24 },
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: t.paperLion },
                                                    r.a.createElement(
                                                        f.a,
                                                        { variant: 'h4' },
                                                        'Get Gist Component'
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: t.paperLion },
                                                    r.a.createElement(v, {
                                                        result: this.props
                                                            .result,
                                                        server: this.props
                                                            .server
                                                    })
                                                ),
                                                r.a.createElement(
                                                    E.a,
                                                    { className: t.paperLion },
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            'data-url':
                                                                '/gists/git-gist-you-rang',
                                                            onClick: this.props
                                                                .queryServerLogin
                                                        },
                                                        'Ring Git Gist'
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                E.a,
                                                { className: t.paperLion },
                                                r.a.createElement(
                                                    'div',
                                                    { className: t.layout },
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'description',
                                                            variant: 'h6'
                                                        },
                                                        'description:',
                                                        ' ',
                                                        this.props.gistList[
                                                            this.state.index
                                                        ].description
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'id',
                                                            variant: 'h6'
                                                        },
                                                        'gistID:',
                                                        ' ',
                                                        this.props.gistList[
                                                            this.state.index
                                                        ].id
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'ownerLogin',
                                                            variant: 'h6'
                                                        },
                                                        'owner login:',
                                                        ' ',
                                                        this.props.gistList[
                                                            this.state.index
                                                        ].ownerLogin
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'gitPullUrl',
                                                            variant: 'h6'
                                                        },
                                                        'gitPullUrl:',
                                                        ' ',
                                                        this.props.gistList[
                                                            this.state.index
                                                        ].gitPullUrl
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'files',
                                                            variant: 'h6'
                                                        },
                                                        'files:',
                                                        ' ',
                                                        this.props.gistList[
                                                            this.state.index
                                                        ].files
                                                    ),
                                                    r.a.createElement('img', {
                                                        src: this.props
                                                            .gistList[0]
                                                            .avatarUrl,
                                                        alt: 'unknown',
                                                        height: '200',
                                                        width: '200'
                                                    })
                                                )
                                            ),
                                            r.a.createElement('br', null),
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: t.paperLion },
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            id: 'fetch',
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            'data-url':
                                                                '/gists/git-gist-get-gist-list',
                                                            onClick: this.props
                                                                .fetchGistList
                                                        },
                                                        'Fetch Gist List'
                                                    ),
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            id: 'prev',
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            onClick: function(
                                                                t
                                                            ) {
                                                                return e.setData(
                                                                    0,
                                                                    e.setData(),
                                                                    t
                                                                );
                                                            }
                                                        },
                                                        'Prev'
                                                    ),
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            id: 'next',
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            onClick: function(
                                                                t
                                                            ) {
                                                                return e.setData(
                                                                    1,
                                                                    e.setData(),
                                                                    t
                                                                );
                                                            }
                                                        },
                                                        'Next'
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component),
                G = Object(k.withStyles)(N)(R),
                U = (function(e) {
                    function t() {
                        return (
                            Object(l.a)(this, t),
                            Object(c.a)(
                                this,
                                Object(u.a)(t).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(p.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props.classes;
                                    return r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(
                                            g.a,
                                            { container: !0, spacing: 24 },
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: e.paperLion },
                                                    r.a.createElement(
                                                        f.a,
                                                        { variant: 'h4' },
                                                        'Test Routes Component'
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: e.paperLion },
                                                    r.a.createElement(v, {
                                                        result: this.props
                                                            .result,
                                                        server: this.props
                                                            .server
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                E.a,
                                                { className: e.paperLion },
                                                r.a.createElement(
                                                    y.a,
                                                    {
                                                        variant: 'contained',
                                                        color: 'primary',
                                                        'data-url':
                                                            '/test-routes/api/foo',
                                                        onClick: this.props
                                                            .queryServerLogin
                                                    },
                                                    'Test Foo Route'
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component),
                q = Object(k.withStyles)(N)(U),
                D = (function(e) {
                    function t() {
                        return (
                            Object(l.a)(this, t),
                            Object(c.a)(
                                this,
                                Object(u.a)(t).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(p.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props.classes;
                                    return r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(
                                            g.a,
                                            { container: !0, spacing: 24 },
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: e.paperLion },
                                                    r.a.createElement(
                                                        f.a,
                                                        { variant: 'h4' },
                                                        'Get User Component'
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: e.paperLion },
                                                    r.a.createElement(v, {
                                                        result: this.props
                                                            .result,
                                                        server: this.props
                                                            .server
                                                    })
                                                ),
                                                r.a.createElement(
                                                    E.a,
                                                    { className: e.paperLion },
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            'data-url':
                                                                '/users/git-user-you-rang',
                                                            onClick: this.props
                                                                .queryServerLogin
                                                        },
                                                        'Ring Get User'
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                E.a,
                                                { className: e.paperLion },
                                                r.a.createElement(
                                                    'div',
                                                    { className: e.layout },
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'login',
                                                            variant: 'h6'
                                                        },
                                                        'login: ',
                                                        this.props.body.login
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'name',
                                                            variant: 'h6'
                                                        },
                                                        'name: ',
                                                        this.props.body.name
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'bio',
                                                            variant: 'h6'
                                                        },
                                                        'bio: ',
                                                        this.props.body.bio
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'location',
                                                            variant: 'h6'
                                                        },
                                                        'location: ',
                                                        this.props.body.location
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'url',
                                                            variant: 'h6'
                                                        },
                                                        'url: ',
                                                        this.props.body.url
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'id',
                                                            variant: 'h6'
                                                        },
                                                        'id: ',
                                                        this.props.body.id
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'node_id',
                                                            variant: 'h6'
                                                        },
                                                        'node_id: ',
                                                        this.props.body.node_id
                                                    ),
                                                    r.a.createElement('img', {
                                                        src: this.props.body
                                                            .avatar_url,
                                                        alt: 'unknown',
                                                        height: '200',
                                                        width: '200'
                                                    })
                                                )
                                            ),
                                            r.a.createElement('br', null),
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: e.paperLion },
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            'data-url':
                                                                '/users/git-user-get-user',
                                                            onClick: this.props
                                                                .queryServerLogin
                                                        },
                                                        'Get User'
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component),
                T = Object(k.withStyles)(N)(D),
                F = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            Object(l.a)(this, t),
                            ((a = Object(c.a)(
                                this,
                                Object(u.a)(t).call(this, e)
                            )).setData = function(e) {
                                var t = a.state.index,
                                    n = t,
                                    r = a.props.repoList.length - 1;
                                0 === e
                                    ? 0 !== t
                                        ? (n -= 1)
                                        : (n = r)
                                    : 1 === e && (t !== r ? (n += 1) : (n = 0)),
                                    a.setState({ index: n });
                            }),
                            (a.state = { index: 0 }),
                            a
                        );
                    }
                    return (
                        Object(p.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props.classes;
                                    return r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(
                                            g.a,
                                            { container: !0, spacing: 24 },
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: t.paperLion },
                                                    r.a.createElement(
                                                        f.a,
                                                        { variant: 'h4' },
                                                        'Get Repos Component'
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: t.paperLion },
                                                    r.a.createElement(v, {
                                                        result: this.props
                                                            .result,
                                                        server: this.props
                                                            .server
                                                    })
                                                ),
                                                r.a.createElement(
                                                    E.a,
                                                    { className: t.paperLion },
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            'data-url':
                                                                '/users/git-user-you-rang',
                                                            onClick: this.props
                                                                .queryServerLogin
                                                        },
                                                        'Ring Git User'
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                E.a,
                                                { className: t.paperLion },
                                                r.a.createElement(
                                                    'div',
                                                    { className: t.layout },
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'name',
                                                            variant: 'h6'
                                                        },
                                                        ' ',
                                                        'name:',
                                                        ' ',
                                                        this.props.repoList[
                                                            this.state.index
                                                        ].name,
                                                        ' '
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'full_name',
                                                            variant: 'h6'
                                                        },
                                                        ' ',
                                                        'full name:',
                                                        ' ',
                                                        this.props.repoList[
                                                            this.state.index
                                                        ].full_name,
                                                        ' '
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'html',
                                                            variant: 'h6'
                                                        },
                                                        ' ',
                                                        'html_url:',
                                                        ' ',
                                                        this.props.repoList[
                                                            this.state.index
                                                        ].html_url,
                                                        ' '
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'login',
                                                            variant: 'h6'
                                                        },
                                                        ' ',
                                                        'owner login:',
                                                        ' ',
                                                        this.props.repoList[
                                                            this.state.index
                                                        ].owner.login,
                                                        ' '
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'url',
                                                            variant: 'h6'
                                                        },
                                                        ' ',
                                                        'owner url:',
                                                        ' ',
                                                        this.props.repoList[
                                                            this.state.index
                                                        ].owner.url,
                                                        ' '
                                                    ),
                                                    r.a.createElement(
                                                        f.a,
                                                        {
                                                            id: 'private',
                                                            variant: 'h6'
                                                        },
                                                        ' ',
                                                        'private:',
                                                        ' ',
                                                        this.props.repoList[
                                                            this.state.index
                                                        ].private.toString(),
                                                        ' '
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: t.paperLion },
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            id: 'prev',
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            className: t.button,
                                                            onClick: function(
                                                                t
                                                            ) {
                                                                return e.setData(
                                                                    0,
                                                                    e.setData(),
                                                                    t
                                                                );
                                                            }
                                                        },
                                                        'Prev'
                                                    ),
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            id: 'next',
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            className: t.button,
                                                            onClick: function(
                                                                t
                                                            ) {
                                                                return e.setData(
                                                                    1,
                                                                    e.setData(),
                                                                    t
                                                                );
                                                            }
                                                        },
                                                        'Next'
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                g.a,
                                                { item: !0, xs: 12 },
                                                r.a.createElement(
                                                    E.a,
                                                    { className: t.paperLion },
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            id: 'private',
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            className: t.button,
                                                            'data-url':
                                                                '/users/git-user-get-user-repos',
                                                            onClick: function(
                                                                t
                                                            ) {
                                                                return e.props.fetchRepoList(
                                                                    t
                                                                );
                                                            }
                                                        },
                                                        'Private'
                                                    ),
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            id: 'public',
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            className: t.button,
                                                            'data-url':
                                                                '/users/git-user-get-user-repos',
                                                            onClick: function(
                                                                t
                                                            ) {
                                                                return e.props.fetchRepoList(
                                                                    t
                                                                );
                                                            }
                                                        },
                                                        'Public'
                                                    ),
                                                    r.a.createElement(
                                                        y.a,
                                                        {
                                                            id: 'all',
                                                            variant:
                                                                'contained',
                                                            color: 'primary',
                                                            className: t.button,
                                                            'data-url':
                                                                '/users/git-user-get-user-repos',
                                                            onClick: function(
                                                                t
                                                            ) {
                                                                return e.props.fetchRepoList(
                                                                    t
                                                                );
                                                            }
                                                        },
                                                        'All'
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component),
                P = Object(k.withStyles)(N)(F),
                _ = a(112),
                I = a(106),
                A = a.n(I),
                B = a(110),
                H = a.n(B),
                J = a(108),
                M = a.n(J),
                Q = a(107),
                W = a.n(Q),
                K = a(109),
                Y = a.n(K),
                z = a(105),
                V = a.n(z),
                $ = a(72),
                X = a.n($),
                Z = a(44),
                ee = a.n(Z),
                te = a(31),
                ae = a.n(te),
                ne = a(32),
                re = a.n(ne),
                ie = a(71),
                oe = a.n(ie),
                le = a(54),
                se = a.n(le),
                ce = a(102),
                ue = a.n(ce),
                me = a(103),
                pe = a.n(me),
                de = a(101),
                ge = a.n(de),
                he = a(29);
            function Ee(e) {
                return r.a.createElement(
                    ee.a,
                    Object.assign({ button: !0, component: 'a' }, e)
                );
            }
            var ve = r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                        Ee,
                        { button: !0, component: he.b, to: '/' },
                        r.a.createElement(
                            ae.a,
                            null,
                            r.a.createElement(ge.a, null)
                        ),
                        r.a.createElement(re.a, { primary: 'Home' })
                    ),
                    r.a.createElement(
                        Ee,
                        {
                            button: !0,
                            component: 'a',
                            href: 'elf-sign-in.html'
                        },
                        r.a.createElement(
                            ae.a,
                            null,
                            r.a.createElement(ue.a, null)
                        ),
                        r.a.createElement(re.a, { primary: 'Login' })
                    ),
                    r.a.createElement(
                        Ee,
                        { button: !0, component: he.b, to: '/firebaseLogout' },
                        r.a.createElement(
                            ae.a,
                            null,
                            r.a.createElement(se.a, null)
                        ),
                        r.a.createElement(re.a, { primary: 'Firebase Logout' })
                    ),
                    r.a.createElement(
                        ee.a,
                        { button: !0, component: he.b, to: '/get-user' },
                        r.a.createElement(
                            ae.a,
                            null,
                            r.a.createElement(oe.a, null)
                        ),
                        r.a.createElement(re.a, { primary: 'Get User Info' })
                    ),
                    r.a.createElement(
                        ee.a,
                        { button: !0, component: he.b, to: '/get-user-repos' },
                        r.a.createElement(
                            ae.a,
                            null,
                            r.a.createElement(oe.a, null)
                        ),
                        r.a.createElement(re.a, { primary: 'Get Repos' })
                    ),
                    r.a.createElement(
                        ee.a,
                        { button: !0, component: he.b, to: '/get-gist' },
                        r.a.createElement(
                            ae.a,
                            null,
                            r.a.createElement(pe.a, null)
                        ),
                        r.a.createElement(re.a, { primary: 'Get Gist' })
                    )
                ),
                be = r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                        Ee,
                        { button: !0, component: he.b, to: '/qux' },
                        r.a.createElement(
                            ae.a,
                            null,
                            r.a.createElement(se.a, null)
                        ),
                        r.a.createElement(re.a, { primary: 'Qux' })
                    ),
                    r.a.createElement(
                        Ee,
                        { button: !0, component: he.b, to: '/test-routes' },
                        r.a.createElement(
                            ae.a,
                            null,
                            r.a.createElement(se.a, null)
                        ),
                        r.a.createElement(re.a, { primary: 'Test Routes' })
                    )
                ),
                fe = a(104),
                we = a.n(fe),
                ye = Object(k.withStyles)(N)(function(e) {
                    var t = e.classes,
                        a = r.a.createElement(
                            'div',
                            { className: t.list },
                            r.a.createElement(X.a, null, ve),
                            r.a.createElement(V.a, null),
                            r.a.createElement(X.a, null, be)
                        ),
                        i = Object(n.useState)(!1),
                        o = Object(_.a)(i, 2),
                        l = o[0],
                        s = o[1];
                    return r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(
                            'div',
                            null,
                            r.a.createElement(
                                A.a,
                                { position: 'static' },
                                r.a.createElement(
                                    W.a,
                                    null,
                                    r.a.createElement(
                                        M.a,
                                        {
                                            className: t.menuButton,
                                            color: 'inherit',
                                            'aria-label': 'Menu',
                                            onClick: function() {
                                                return s(!l);
                                            }
                                        },
                                        r.a.createElement(Y.a, null)
                                    ),
                                    r.a.createElement(
                                        f.a,
                                        {
                                            variant: 'h6',
                                            color: 'inherit',
                                            className: t.flex,
                                            align: 'center'
                                        },
                                        'GitExplorer'
                                    )
                                )
                            ),
                            r.a.createElement(
                                'div',
                                { className: 'App-header' },
                                r.a.createElement(
                                    'div',
                                    { className: 'App-logo' },
                                    r.a.createElement('img', {
                                        src: we.a,
                                        alt: 'watermelon',
                                        width: '100'
                                    })
                                ),
                                r.a.createElement('h1', null, 'Git Explorer')
                            ),
                            r.a.createElement(
                                H.a,
                                { open: l, onClose: function() {} },
                                r.a.createElement(
                                    'div',
                                    {
                                        role: 'button',
                                        onClick: function() {
                                            return s(!l);
                                        },
                                        onKeyDown: function() {
                                            return s(!l);
                                        }
                                    },
                                    a
                                )
                            )
                        )
                    );
                }),
                ke = a(34),
                Le = function() {
                    var e = window.firebase.auth().currentUser;
                    return (
                        e ||
                            (e = {
                                displayName: 'unknown',
                                email: 'unknown',
                                providerId: 'unknown',
                                photoURL: 'unknown'
                            }),
                        r.a.createElement(
                            'div',
                            null,
                            r.a.createElement(
                                E.a,
                                null,
                                r.a.createElement(
                                    f.a,
                                    { variant: 'h5' },
                                    'Current User Information'
                                )
                            ),
                            r.a.createElement('br', null),
                            r.a.createElement(
                                E.a,
                                null,
                                r.a.createElement(
                                    f.a,
                                    { variant: 'body1', gutterBottom: !0 },
                                    'Name: ',
                                    e.displayName || 'logged out'
                                ),
                                r.a.createElement(
                                    f.a,
                                    { variant: 'body1', gutterBottom: !0 },
                                    'Email: ',
                                    e.email
                                ),
                                r.a.createElement(
                                    f.a,
                                    { variant: 'body1', gutterBottom: !0 },
                                    'Provider ID: ',
                                    e.providerId
                                ),
                                r.a.createElement('img', {
                                    src: e.photoURL,
                                    alt: 'user',
                                    width: '100',
                                    height: '100'
                                })
                            ),
                            r.a.createElement(
                                E.a,
                                null,
                                r.a.createElement(
                                    y.a,
                                    {
                                        variant: 'contained',
                                        color: 'primary',
                                        'data-url': '/git-gist-you-rang',
                                        onClick: function() {
                                            window.firebase
                                                .auth()
                                                .signOut()
                                                .then(
                                                    function() {
                                                        console.log(
                                                            'Signed Out'
                                                        ),
                                                            (window.location.href =
                                                                '/');
                                                    },
                                                    function(e) {
                                                        console.error(
                                                            'Sign Out Error',
                                                            e
                                                        );
                                                    }
                                                );
                                        }
                                    },
                                    'Log Out'
                                )
                            )
                        )
                    );
                },
                xe = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            Object(l.a)(this, t),
                            ((a = Object(c.a)(
                                this,
                                Object(u.a)(t).call(this, e)
                            )).setGistList = function(e) {
                                console.log('parsed json', e),
                                    a.setState(function() {
                                        return { gistList: e.result };
                                    });
                            }),
                            (a.fetchGistList = function(e) {
                                var t = Object(m.a)(a);
                                fetch(e.currentTarget.dataset.url)
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        t.setGistList(e);
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            (a.setRepoList = function(e) {
                                console.log('retrieved repos: ', e),
                                    a.setState({ repoList: e });
                            }),
                            (a.fetchRepoList = function(e) {
                                var t = Object(m.a)(a),
                                    n = e.currentTarget.id,
                                    r = [];
                                console.log('fetchRepoList()', n),
                                    fetch(e.currentTarget.dataset.url)
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            if ('private' === n) {
                                                console.log(
                                                    'These are private repos'
                                                );
                                                for (
                                                    var a = 0;
                                                    a < e.result.length;
                                                    a++
                                                )
                                                    !0 ===
                                                        e.result[a].private &&
                                                        r.push(e.result[a]);
                                            } else if ('public' === n) {
                                                console.log(
                                                    'These are public repos'
                                                );
                                                for (
                                                    var i = 0;
                                                    i < e.result.length;
                                                    i++
                                                )
                                                    !0 !==
                                                        e.result[i].private &&
                                                        r.push(e.result[i]);
                                            } else
                                                for (
                                                    var o = 0;
                                                    o < e.result.length;
                                                    o++
                                                )
                                                    r.push(e.result[o]);
                                            t.setRepoList(r);
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                'parsing failed, URL bad, network down, or similar',
                                                e
                                            );
                                        });
                            }),
                            (a.setData = function(e) {
                                console.log(e);
                            }),
                            (a.getFirebaseToken = function() {
                                return new Promise(function(e, t) {
                                    window.firebase.auth().currentUser ||
                                        (a.setData({
                                            result: 'You need to log in.'
                                        }),
                                        t({
                                            result:
                                                'You need to log in (env export?).'
                                        })),
                                        window.firebase
                                            .auth()
                                            .currentUser.getIdToken(!0)
                                            .then(function(t) {
                                                e({ token: t });
                                            })
                                            .catch(function(e) {
                                                t(e);
                                            });
                                });
                            }),
                            (a.queryServerLogin = function(e) {
                                var t = e.currentTarget.dataset.url;
                                a.getFirebaseToken()
                                    .then(function(e) {
                                        console.log('TOKEN', e.token),
                                            fetch(t + '?token=' + e.token)
                                                .then(function(e) {
                                                    return e.json();
                                                })
                                                .then(function(e) {
                                                    e.body &&
                                                        (e.body = JSON.parse(
                                                            e.body
                                                        )),
                                                        a.setState(e),
                                                        a.setData(e);
                                                })
                                                .catch(function(e) {
                                                    console.log(
                                                        'parsing failed, URL bad, network down, or similar',
                                                        e
                                                    );
                                                });
                                    })
                                    .catch(function(e) {
                                        console.log(e);
                                    });
                            }),
                            (a.state = e.appInit),
                            a
                        );
                    }
                    return (
                        Object(p.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this;
                                    return r.a.createElement(
                                        he.a,
                                        null,
                                        r.a.createElement(
                                            'div',
                                            { className: 'App' },
                                            r.a.createElement(ye, null),
                                            r.a.createElement('br', null),
                                            r.a.createElement(ke.a, {
                                                path: '/test-routes',
                                                render: function(t) {
                                                    return r.a.createElement(
                                                        q,
                                                        Object.assign({}, t, {
                                                            queryServerLogin:
                                                                e.queryServerLogin,
                                                            result:
                                                                e.state.result,
                                                            server:
                                                                e.state.server
                                                        })
                                                    );
                                                }
                                            }),
                                            r.a.createElement(ke.a, {
                                                path: '/qux',
                                                render: function(t) {
                                                    return r.a.createElement(
                                                        C,
                                                        Object.assign({}, t, {
                                                            queryServerLogin:
                                                                e.queryServerLogin,
                                                            result:
                                                                e.state.result,
                                                            server:
                                                                e.state.server
                                                        })
                                                    );
                                                }
                                            }),
                                            r.a.createElement(ke.a, {
                                                path: '/get-user',
                                                render: function(t) {
                                                    return r.a.createElement(
                                                        T,
                                                        Object.assign({}, t, {
                                                            queryServerLogin:
                                                                e.queryServerLogin,
                                                            body: e.state.body,
                                                            result:
                                                                e.state.result,
                                                            server:
                                                                e.state.server
                                                        })
                                                    );
                                                }
                                            }),
                                            r.a.createElement(ke.a, {
                                                path: '/get-user-repos',
                                                render: function(t) {
                                                    return r.a.createElement(
                                                        P,
                                                        Object.assign({}, t, {
                                                            queryServerLogin:
                                                                e.queryServerLogin,
                                                            fetchRepoList:
                                                                e.fetchRepoList,
                                                            repoList:
                                                                e.state
                                                                    .repoList,
                                                            result:
                                                                e.state.result,
                                                            server:
                                                                e.state.server
                                                        })
                                                    );
                                                }
                                            }),
                                            r.a.createElement(ke.a, {
                                                path: '/get-gist',
                                                render: function(t) {
                                                    return r.a.createElement(
                                                        G,
                                                        Object.assign({}, t, {
                                                            queryServerLogin:
                                                                e.queryServerLogin,
                                                            fetchGistList:
                                                                e.fetchGistList,
                                                            gistList:
                                                                e.state
                                                                    .gistList,
                                                            result:
                                                                e.state.result,
                                                            server:
                                                                e.state.server
                                                        })
                                                    );
                                                }
                                            }),
                                            r.a.createElement(ke.a, {
                                                path: '/firebaseLogout',
                                                component: Le
                                            })
                                        ),
                                        r.a.createElement('br', null),
                                        r.a.createElement(
                                            'p',
                                            { align: 'center' },
                                            r.a.createElement(
                                                'b',
                                                null,
                                                'Copyright \xa9 Hannah Pittman'
                                            )
                                        ),
                                        r.a.createElement(
                                            'p',
                                            { align: 'center' },
                                            r.a.createElement(
                                                'b',
                                                null,
                                                'ISIT 322 Spring 2019 Professor Charlie Calvert'
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component),
                Oe = Object(k.withStyles)(N)(xe),
                je = a(56),
                Ne = a.n(je),
                Se = a(55),
                Ce = a.n(Se),
                Re = a(111),
                Ge = a.n(Re),
                Ue = {
                    file: 'unknown',
                    result: 'unknown',
                    status: 'unknown',
                    server: 'unknown',
                    body: {
                        login: 'unknown',
                        id: 'unknown',
                        node_id: 'unknown',
                        name: 'unknown',
                        avatar_url:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png',
                        bio: 'unknown',
                        location: 'unknown',
                        url: 'unknown'
                    },
                    gistList: [
                        {
                            id: 'unknown1',
                            description: 'unknown1',
                            ownerLogin: 'unknown1',
                            gitPullUrl: 'unknown1',
                            files: 'unknown1',
                            avatarUrl:
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png'
                        },
                        {
                            id: 'unknown2',
                            description: 'unknown2',
                            ownerLogin: 'unknown2',
                            gitPullUrl: 'unknown2',
                            files: 'unknown2',
                            avatarUrl:
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png'
                        }
                    ],
                    repoList: [
                        {
                            name: 'unknown1',
                            full_name: 'unknown1',
                            html_url: 'unknown1',
                            owner: { login: 'unknown1', url: 'unknown1' },
                            private: 'unknown1'
                        },
                        {
                            name: 'unknown2',
                            full_name: 'unknown2',
                            html_url: 'unknown2',
                            owner: { login: 'unknown2', url: 'unknown2' },
                            private: 'unknown2'
                        }
                    ]
                },
                qe = Object(k.createMuiTheme)({
                    typography: { useNextVariants: !0 },
                    palette: {
                        primary: {
                            light: Ce.a[300],
                            main: Ce.a[500],
                            dark: Ce.a[700]
                        },
                        secondary: {
                            light: Ne.a[300],
                            main: Ne.a[500],
                            dark: Ne.a[700]
                        },
                        background: { paper: '#cce2ee', default: '#ddf3ff' }
                    }
                });
            o.a.render(
                r.a.createElement(function() {
                    return r.a.createElement(
                        k.MuiThemeProvider,
                        { theme: qe },
                        r.a.createElement(Ge.a, null),
                        r.a.createElement(Oe, { appInit: Ue })
                    );
                }, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        57: function(e, t, a) {},
        98: function(e, t, a) {
            e.exports = a.p + 'static/media/tree-of-life.9f67e0bd.png';
        }
    },
    [[114, 1, 2]]
]);
//# sourceMappingURL=main.19d56e48.chunk.js.map
