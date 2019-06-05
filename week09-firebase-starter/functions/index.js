const functions = require('firebase-functions');
const express = require('express');
const app = express();
const userRouter = require('./git-user');
const gistRouter = require('./git-gist');
const quxRouter = require('./qux');
const testRoutesRouter = require('./test-routes');

app.get('/', function (req, res) {
    console.log("HOME CALLED");
    res.send({data: "Default home page route called"});
});


app.get('/bar', function (req, res) {
    console.log("bar CALLED");
    res.send({data: "bar route called"});
});

app.use('/users', userRouter);
app.use('/gists', gistRouter);
app.use('/qux', quxRouter);
app.use('/test-routes', testRoutesRouter);

exports.app = functions.https.onRequest(app);