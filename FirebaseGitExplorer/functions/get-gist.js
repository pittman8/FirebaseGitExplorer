var express = require('express');
var router = express.Router();
var GitHub = require('github-api');
const debug = require('debug')('gists');
const Octokit = require('@octokit/rest');
const { init, verifyToken } = require('./verify-db');
require('firebase');
require('firebase/firestore');

const token = ['f55ec32610be4a2fcb392fce65d331df24a8f5d7'];
let db = null;

const myOctokit = new Octokit({
    auth: 'f55ec32610be4a2fcb392fce65d331df24a8f5d7',
    type: 'token',
    username: 'pittman8'
});

let getGitHub = function() {
    let gh;
    /*eslint-disable no-constant-condition*/
    if (true) {
        gh = new GitHub({
            token: token
        });
    } else {
        gh = new GitHub({
            username: 'pittman8',
            password: ''
        });
    }
    return gh;
};

const writeBatchData = (results, db) => {
    console.log('WRITE-BATCH-DATA CALLED', results);
    return new Promise(function(resolve, reject) {
        const batch = db.batch();

        results.forEach(gist => {
            console.log('ITEM', gist);
            try {
                let itemsRef = db.collection('gists').doc(gist.id);
                batch.set(itemsRef, gist);
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

function readSnapshot(db) {
    return new Promise(function(resolve, reject) {
        db.collection('gists')
            .get()
            .then(snapshot => {
                resolve(snapshot);
            })
            .catch(ex => {
                reject(ex);
            });
    });
}

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/you-rang', (request, response) => {
    response.send({ result: 'you rang', server: 'git-gist' });
});

router.get('/get-gist-list', function(request, response) {
    debug('GET BASIC LIST CALLED');
    let gh = getGitHub();
    const me = gh.getUser();
    debug('ME', me);
    me.listGists()
        .then(function({ data }) {
            debug('FILES PROMISE', Object.keys(data[0].files));
            const results = data.map(item => ({
                htmlUrl: item.html_url,
                id: item.id,
                gitPullUrl: item.git_pull_url,
                description: item.description,
                ownerLogin: item.owner.login,
                avatarUrl: item.owner.avatar_url,
                files: Object.keys(item.files)
            }));
            response.status(200).send({
                count: results.length,
                result: results
            });
        })
        .catch(function(err) {
            debug('USER Promise Rejected', err);
            response.status(500).send({ result: err });
        });
});

router.get('/write-gists', (request, response) => {
    const token = request.query.token;
    debug('GET BASIC LIST CALLED');
    let gh = getGitHub();
    const me = gh.getUser();
    debug('ME', me);
    verifyToken(token)
        .then(decodedToken => {
            me.listGists().then(function({ data }) {
                debug('FILES PROMISE', Object.keys(data[0].files));
                console.log(
                    'TEST 1: ' + decodedToken.uid + ' ' + decodedToken.name
                );
                const results = data.map(item => ({
                    htmlUrl: item.html_url,
                    id: item.id,
                    gitPullUrl: item.git_pull_url,
                    description: item.description,
                    ownerLogin: item.owner.login,
                    avatarUrl: item.owner.avatar_url,
                    files: Object.keys(item.files),
                    logged_in_user_name: decodedToken.name,
                    logged_in_user_id: decodedToken.uid
                }));

                if (!db) {
                    db = init();
                }

                writeBatchData(results, db)
                    .then(result => {
                        response.send(result);
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

router.get('/read-gists', (req, res) => {
    if (!db) {
        db = init();
    }

    readSnapshot(db)
        .then(snapshot => {
            const data = snapshot.docs.map(doc => doc.data());
            res.send(data);
        })
        .catch(ex => {
            res.send(ex);
        });
});

router.get('/get-hidden-gists', (request, response) => {
    myOctokit.gists
        .list({
            per_page: 100
        })
        .then(({ data }) => {
            const newData = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].public === false) {
                    newData.push(data[i]);
                }
            }
            response.send({ result: newData });
        });
});

router.get('/get-all-gists', (request, response) => {
    myOctokit.gists
        .list({
            per_page: 100
        })
        .then(({ data }) => {
            response.send({ result: data });
        });
});

module.exports = router;
