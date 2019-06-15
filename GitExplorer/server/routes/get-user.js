var express = require('express');
var router = express.Router();
const requester = require('request');
const { init, verifyToken } = require('./verify-db');
const firebase = require("firebase");
require("firebase/firestore");

let db = null;

let currentUser = window.firebase.auth().currentUser;
if (!currentUser) {
    currentUser = {
        displayName: 'unknown',
        email: 'unknown',
        providerId: 'unknown',
        photoURL: 'unknown'
    };
}

const writeData = (user, db) => {
    return new Promise(function (resolve, reject) {

        console.log('WRITE DATA CALLED:\n' + JSON.stringify(user, null, 4));

        db.collection("user").doc("uid").set({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        })
            .then(function (dbData) {
                resolve({'result': 'success'});
            })
            .catch(function (error) {
                reject({"error: ": error, text: 'error writing document'});
            });
    });
};

router.get('/you-rang', function(request, response) {
    console.log('TEST USER CALLED', request.query);
    const token = request.query.token;
    verifyToken(token)
        .then(() => {
            requester('http://localhost:30028/git-user-you-rang').pipe(
                response
            );
        })
        .catch(ex => {
            console.log('COULD NOT VERIFY TOKEN');
            response.send(ex);
        });

    if(!db) {
        db = init();
    }
    writeData(currentUser, db)
        .then(result => {
            console.log('WRITE RESULT', result);
            response.send(result);
        })
        .catch(ex => {
            response.send(ex)
        })
});

router.get('/get-user', function(request, response) {
    verifyToken(request.query.token)
        .then(() => {
            requester('http://localhost:30028/git-user-get-user').pipe(
                response
            );
        })
        .catch(ex => {
            console.log('COULD NOT VERIFY TOKEN');
            response.send(ex);
        });
});

router.get('/get-repos', function(request, response) {
    requester('http://localhost:30028/git-user-get-user-repos').pipe(response);
});

module.exports = router;
