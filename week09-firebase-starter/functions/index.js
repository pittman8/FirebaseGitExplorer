const functions = require('firebase-functions');
const myRequest = require('request');
const cors = require('cors')({
    origin: true,
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