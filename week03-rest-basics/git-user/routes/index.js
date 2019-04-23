var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/git-user-you-rang', (request, response) => {
    response.send({'result': 'you rang', server: 'git-user'});
});

router.get('/git-user-get-user', (request, response) => {
    response.send({server: 'git-user'});
});

module.exports = router;
