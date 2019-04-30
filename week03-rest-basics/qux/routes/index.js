var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/qux-you-rang', (request, response) => {
    response.send({ result: 'you rang', server: 'qux' });
});

module.exports = router;
