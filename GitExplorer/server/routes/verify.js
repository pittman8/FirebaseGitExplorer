const admin = require('firebase-admin');

let loggedIn = false;

//'firebase-adminsdk-2p1h1@prog270-calvert.iam.gserviceaccount.com';
function init() {
    // var serviceAccount = require(process.env.HOME + "/Source/prog270-calvert-firebase-adminsdk-2p1h1-0a73c9115c.json");
    loggedIn = true;
    console.log(
        'INITIALIZE FIREBASE ADMIN',
        admin.initializeApp({
            // credential: admin.credential.cert(serviceAccount),
            credential: admin.credential.applicationDefault(),
            databaseURL: 'https://YOUR_INFO_HERE.firebaseio.com'
        })
    );
}

function verifyToken(token) {
    return new Promise(function(resolve, reject) {
        if (!loggedIn) {
            init();
        }
        admin
            .auth()
            .verifyIdToken(token)
            .then(function(decodedToken) {
                console.log('UID', JSON.stringify(decodedToken, null, 4));
                console.log('MAIN SERVER QUX YOU RANG CALLED');
                resolve(decodedToken);
            })
            .catch(function(error) {
                console.log(error);
                reject(error);
            });
    });
}

module.exports=verifyToken;