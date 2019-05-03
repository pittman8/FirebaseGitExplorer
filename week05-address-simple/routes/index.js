var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/foo', function(request, response) {
    response.send({ result: 'success-foo' });
});

router.get('/bar', function(request, response) {
    response.send({ result: 'success-bar' });
});

module.exports = router;
