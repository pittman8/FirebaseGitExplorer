var express = require('express');
var router = express.Router();
const requester = require('request');
const {verifyToken} = require('./verify-db');

router.get('/git-user-you-rang', function(request, response) {
    console.log('TEST USER CALLED', request.query);
    verifyToken(request.query.token)
        .then(() => {
            requester('http://localhost:30028/git-user-you-rang').pipe(response);
        })
        .catch(ex => {
            console.log('COULD NOT VERIFY TOKEN');
            response.send(ex);
        })
});

router.get('/git-user-get-user', function(request, response) {
    verifyToken(request.query.token)
        .then(() => {
            requester('http://localhost:30028/git-user-get-user').pipe(response);
        })
        .catch(ex => {
            console.log('COULD NOT VERIFY TOKEN');
            response.send(ex);
        })

});

router.get('/git-user-get-user-repos', function(request, response) {
    requester('http://localhost:30028/git-user-get-user-repos').pipe(response);
});

module.exports = router;