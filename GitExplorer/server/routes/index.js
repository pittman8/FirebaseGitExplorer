var express = require('express');
var router = express.Router();
const {init} = require('./verify-db');
const firebase = require("firebase");
require("firebase/firestore");

let db = null;

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'server' });
});

let currentUser = window.firebase.auth().currentUser;
if (!currentUser) {
    currentUser = {
        displayName: 'unknown',
        email: 'unknown',
        providerId: 'unknown',
        photoURL: 'unknown'
    };
}

const writeData = (currentUser, db) => {
    return new Promise(function (resolve, reject) {

        console.log('WRITE DATA CALLED:\n' + JSON.stringify(user, null, 4));

        db.collection("user").doc("uid").set({
            name: currentUser.displayName,
            email: currentUser.email,
            photoUrl: currentUser.photoURL
        })
            .then(function (dbData) {
                resolve({'result': 'success'});
            })
            .catch(function (error) {
                reject({"error: ": error, text: 'error writing document'});
            });
    });
};


// Write user to the database
router.get('/you-rang', (req, res) => {
    if(!db) {
        db = init();
    }
    writeData(currentUser, db)
        .then(result => {
            console.log('WRITE RESULT', result);
            res.send(result);
        })
        .catch(ex => {
            res.send(ex)
        })
});

module.exports = router;
