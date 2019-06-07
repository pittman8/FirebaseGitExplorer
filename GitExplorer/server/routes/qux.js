var express = require('express');
var router = express.Router();
const requester = require('request');

router.get('/qux-you-rang', function(request, response) {
    requester('http://localhost:30027/qux-you-rang').pipe(response);
});

module.exports = router;