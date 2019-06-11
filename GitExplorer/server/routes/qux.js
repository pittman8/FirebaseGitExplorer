var express = require('express');
var router = express.Router();
const requester = require('request');
const {verifyToken} = require('./verify-db');

router.get('/qux-you-rang', function(request, response) {
    console.log('TEST QUX CALLED', request.query);
    verifyToken(request.query.token)
        .then(() => {
            requester('http://localhost:30027/qux-you-rang').pipe(response);
        })
        .catch(ex => {
            console.log('COULD NOT VERIFY TOKEN');
            response.send(ex);
        })
});

module.exports = router;