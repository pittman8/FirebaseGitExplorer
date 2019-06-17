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
            .doc(decodedToken.uid)
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

const readData = (docName, db) => {
    return new Promise(function (resolve, reject) {
        var docRef = db.collection("user").doc(docName);
        console.log('READ DATA CALLED:\n' + JSON.stringify(docName, null, 4));
        docRef.get()
            .then(function (doc) {
                if (doc.exists) {
                    resolve({"documentData": doc.data(), result: 'success', server: 'git-user'});
                } else {
                    resolve({documentData: "No such document!"});
                }
            })
            .catch(function (error) {
                reject({error: error});
            });
    });
};

const writeBatchData = (results, db) => {
    console.log('WRITE-BATCH-DATA CALLED', results);
    return new Promise(function(resolve, reject) {
        const batch = db.batch();

        results.forEach(repo => {
            console.log('ITEM', repo);
            try {
                let itemsRef = db.collection('repository').doc(repo.id);
                batch.set(itemsRef, repo);
            } catch (ex) {
                console.log('ITEM2', ex);
            }
        });

        console.log('READY TO COMMIT');
        batch
            .commit()
            .then(dbData => {
                console.log('SUCCESS');
                resolve({ result: 'success', dbData: dbData });
            })
            .catch(function(error) {
                console.log('ERROR', error);
                reject({ 'error: ': error, text: 'error writing document' });
            });
    });
};

// function readSnapshot(db) {
//     return new Promise(function(resolve, reject) {
//         db.collection('gists')
//             .get()
//             .then(snapshot => {
//                 resolve(snapshot);
//             })
//             .catch(ex => {
//                 reject(ex);
//             });
//     });
// }

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
                    readData(decodedToken.uid, db)
                        .then(result => {
                            response.send(result);
                        })
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

router.get('/write-repos', (request, response) => {
    const token = request.query.token;
    verifyToken(token)
        .then(function() {
            myOctokit.repos
                .list({
                    type: 'all'
                })
                .then(({ data }) => {
                    if (!db) {
                        db = init();
                    }

                    writeBatchData(result, db)
                        .then(function() {
                            response.send({ result: data });
                        })
                        .catch(ex => {
                            response.send(ex);
                        });
                });

        })
        .catch(function(err) {
            debug('USER Promise Rejected', err);
            response.status(500).send({ result: err });
        });
});

// router.get('/read-repos', (req, res) => {
//     if (!db) {
//         db = init();
//     }
//
//     readSnapshot(db)
//         .then(snapshot => {
//             const data = snapshot.docs.map(doc => doc.data());
//             res.send(data);
//         })
//         .catch(ex => {
//             res.send(ex);
//         });
// });

module.exports = router;
