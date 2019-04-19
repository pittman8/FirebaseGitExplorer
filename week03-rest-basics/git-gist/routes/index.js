var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/git-gist-you-rang', (request, response) => {
    response.send({'result': 'you rang', server: 'git-gist'});
});

module.exports = router;
