var express = require('express');
var router = express.Router();
const {verifyToken} = require('./verify-db');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'server' });
});

router.get('/test-verify', (request, response) => {
    console.log('TEST VERIFY CALLED', request.query);
    verifyToken(request.query.token)
        .then(decodedToken => {
            response.send({result: 'Verified!', decodedToken: decodedToken})
        })
        .catch(ex => {
            response.send(ex);
        })
});

module.exports = router;
