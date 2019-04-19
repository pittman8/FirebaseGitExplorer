var express = require('express');
var router = express.Router();
const requester = require('request');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});

router.get('/qux-you-rang', function(request, response, next) {
  requester('http://localhost:30027/qux-you-rang').pipe(response);
});

router.get('/git-gist-you-rang', function(request, response, next) {
  requester('http://localhost:30029/git-gist-you-rang').pipe(response);
});

router.get('/git-user-you-rang', function(request, response, next) {
    requester('http://localhost:30028/git-user-you-rang').pipe(response);
});

router.get('/git-user-get-user', function(req, res) {
    const options = {
        url: 'https://api.github.com/users/pittman8',
        headers: {
            'User-Agent': 'request'
        }
    };
    request(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({ error: error, response: response, body: body });
    });
});

module.exports = router;