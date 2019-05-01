var express = require('express');
var router = express.Router();
var GitHub = require('github-api');
//import Logger from './elf-logger';
//const logger = new Logger('address', 'blue', 'yellow', '24px');
const debug = require('debug')('gists');
const token = require('./tokens');

let getGitHub = function() {
    let gh;
    if (true) {
        gh = new GitHub({
            token: token
        });
    } else {
        gh = new GitHub({
            username: 'pittman8',
            password: ''
        });
    }
    return gh;
};

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/git-gist-you-rang', (request, response) => {
    response.send({ result: 'you rang', server: 'git-gist' });
});

router.get('/git-gist-get-gist-list', function(request, response) {
    debug('GET BASIC LIST CALLED');
    let gh = getGitHub();
    const me = gh.getUser();
    debug('ME', me);
    me
        .listGists()
        .then(function({ data }) {
            debug('FILES PROMISE', Object.keys(data[0].files));
            const results = data.map(item => ({
                htmlUrl: item.html_url,
                id: item.id,
                gitPullUrl: item.git_pull_url,
                description: item.description,
                ownerLogin: item.owner.login,
                avatarUrl: item.owner.avatar_url,
                files: Object.keys(item.files)
            }));
            response.status(200).send({
                count: results.length,
                result: results
            });
        })
        .catch(function(err) {
            debug('USER Promise Rejected', err);
            response.status(500).send({ result: err });
        });
});

module.exports = router;
