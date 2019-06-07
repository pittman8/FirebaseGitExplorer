var express = require('express');
var router = express.Router();
const requester = require('request');

router.get('/git-user-you-rang', function(request, response) {
    requester('http://localhost:30028/git-user-you-rang').pipe(response);
});

router.get('/git-user-get-user', function(request, response) {
    requester('http://localhost:30028/git-user-get-user').pipe(response);
});

router.get('/git-user-get-user-repos', function(request, response) {
    requester('http://localhost:30028/git-user-get-user-repos').pipe(response);
});

module.exports = router;