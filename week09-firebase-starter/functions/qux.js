var express = require('express');
var router = express.Router();

router.get('/qux-you-rang', (request, response) => {
    response.send({ result: 'you rang', server: 'qux' });
});

module.exports = router;