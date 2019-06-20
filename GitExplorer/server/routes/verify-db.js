var admin = require('firebase-admin');
const credentialLoad = require('./credentials');

let loggedIn = false;

function init() {
    loggedIn = true;
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(credentialLoad)
        });
    }
    return admin.firestore();
}

function verifyToken(token, url) {
    return new Promise(function(resolve, reject) {
        if (!loggedIn) {
            init(url);
        }
        admin
            .auth()
            .verifyIdToken(token)
            .then(function(decodedToken) {
                console.log('UID', JSON.stringify(decodedToken, null, 4));
                resolve(decodedToken);
            })
            .catch(function(error) {
                console.log(error);
                reject(error);
            });
    });
}

module.exports.verifyToken = verifyToken;
module.exports.init = init;
