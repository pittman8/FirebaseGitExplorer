var express = require('express');
var router = express.Router();
const requester = require('request');

router.get('/git-gist-you-rang', function(request, response) {
    requester('http://localhost:30029/git-gist-you-rang').pipe(response);
});

router.get('/git-gist-get-gist-list', function(request, response) {
    requester('http://localhost:30029/git-gist-get-gist-list').pipe(response);
});

module.exports = router;