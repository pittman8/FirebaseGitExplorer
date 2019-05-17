var express = require('express');
var router = express.Router();
const requester = require('request');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/git-user-you-rang', (request, response) => {
    response.send({ result: 'you rang', server: 'git-user' });
});

router.get('/git-user-get-user', (req, res) => {
    const user = 'pittman8';
    const options = {
        url: 'https://api.github.com/users/' + user,
        headers: {
            'User-Agent': 'request'
        }
    };
    requester(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({ error: error, response: response, body: body });
    });

});

router.get('/git-user-get-user-repos', (request, response) => {
    response.send({ result: 'you rang', server: 'git-user' });
});

module.exports = router;
