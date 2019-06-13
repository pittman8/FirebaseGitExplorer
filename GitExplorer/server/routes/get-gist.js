var express = require('express');
var router = express.Router();
const requester = require('request');
const { verifyToken } = require('./verify-db');

router.get('/git-gist-you-rang', function(request, response) {
    verifyToken(request.query.token)
        .then(() => {
            requester('http://localhost:30029/git-gist-you-rang').pipe(response);
        })
        .catch(ex => {
            console.log('COULD NOT VERIFY TOKEN');
            response.send(ex);
        })
});

router.get('/git-gist-get-gist-list', function(request, response) {
    requester('http://localhost:30029/git-gist-get-gist-list').pipe(response);
});

module.exports = router;