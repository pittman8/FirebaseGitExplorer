var express = require('express');
var router = express.Router();
const { verifyToken } = require('./verify-db');

/* Set up a route called foo. */
router.get('/foo', function(request, response) {
    var message = {
        result: 'success',
        status: 'bar',
        server: 'main-server',
        file: 'api.js'
    };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    verifyToken(request.query.token)
        .then(() => {
            response.send(message);
        })
        .catch(ex => {
            console.log('COULD NOT VERIFY TOKEN');
            response.send(ex);
        })
});

module.exports = router;
