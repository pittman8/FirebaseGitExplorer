var express = require('express');
var router = express.Router();
const requester = require('request');
const { init, verifyToken } = require('./verify-db');
require('firebase');
require('firebase/firestore');

let db = null;

const writeData = (user, db) => {
    return new Promise(function(resolve, reject) {
        console.log('WRITE DATA CALLED:\n' + JSON.stringify(user, null, 4));

        db.collection('user')
            .doc('uid')
            .set({
                name: user.name,
                email: user.email,
                picture: user.picture
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
            // var message = { result: 'success',  server: 'get-user' };
            // response.send(message);
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

router.get('/get-user', function(request, response) {
    verifyToken(request.query.token)
        .then(() => {
            requester('http://localhost:30028/get-user').pipe(response);
        })
        .catch(ex => {
            console.log('COULD NOT VERIFY TOKEN');
            response.send(ex);
        });
});

router.get('/get-repos', function(request, response) {
    requester('http://localhost:30028/get-repos').pipe(response);
});

module.exports = router;
