var express = require('express');
var router = express.Router();
const requester = require('request');
const Octokit = require('@octokit/rest');
const { init, verifyToken } = require('./verify-db');
require('firebase');
require('firebase/firestore');

let db = null;

const myOctokit = new Octokit({
    auth: 'f55ec32610be4a2fcb392fce65d331df24a8f5d7',
    type: 'token',
    username: 'pittman8'
});

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

const writeData = (decodedToken, db) => {
    return new Promise(function(resolve, reject) {
        console.log(
            'WRITE DATA CALLED:\n' + JSON.stringify(decodedToken, null, 4)
        );
        db.collection('user')
            .doc('uid')
            .set({
                name: decodedToken.name,
                email: decodedToken.email,
                picture: decodedToken.picture
            })
            .then(function() {
                resolve({ result: 'success', server: 'git-user' });
            })
            .catch(function(error) {
                reject({ 'error: ': error, text: 'error writing document' });
            });
    });
};

router.get('/you-rang', (request, response) => {
    console.log('TEST VERIFY CALLED', request.query);
    const token = request.query.token;
    verifyToken(token)
        .then(decodedToken => {
            //var message = { result: 'success',  server: 'get-user' };
            if (!db) {
                db = init();
            }
            writeData(decodedToken, db)
                .then(result => {
                    console.log('WRITE RESULT', result);
                    response.send(result);
                })
                .catch(ex => {
                    response.send(ex);
                });
        })
        .catch(error => {
            response.send({
                result: 'not logged in to Firebase',
                suggestion:
                    'export GOOGLE_APPLICATION_CREDENTIALS="ServiceRecord',
                error: error
            });
        });
});

router.get('/get-user', (req, res) => {
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

router.get('/get-repos', (request, response) => {
    myOctokit.repos
        .list({
            type: 'all'
        })
        .then(({ data }) => {
            response.send({ result: data });
        });
});

module.exports = router;
