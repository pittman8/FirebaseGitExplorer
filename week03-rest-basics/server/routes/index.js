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

module.exports = router;