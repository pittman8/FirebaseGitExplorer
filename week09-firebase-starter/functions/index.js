const functions = require('firebase-functions');
const myRequest = require('request');
const reqOctokit = require('@octokit/rest');

const cors = require('cors')({
    origin: true,
});

const theOctokit = new reqOctokit({
    auth: 'f55ec32610be4a2fcb392fce65d331df24a8f5d7',
    type: 'token',
    username: 'pittman8'
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
        response.send({response: "Hello from Firebase!"});
    });
});
exports.youRang = functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
        response.send({result: 'you rang', server: 'git-user'});
    });
});

exports.getUser = functions.https.onRequest((req, res) => {
    const user = 'pittman8';
    const options = {
        url: 'https://api.github.com/users/' + user,
        headers: {
            'User-Agent': 'request'
        }
    };
    myRequest(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        return cors(req, res, () => {
            res.send({error: error, response: response.statusCode, body: body});
        });
    });
});

exports.getRepos = functions.https.onRequest((request, response) => {
    theOctokit.repos.
        list({
            type: 'all'
        })
        .then(({ data }) => {
            return cors(request, response, () => {
                response.send({ result: data });
            });
        });
});