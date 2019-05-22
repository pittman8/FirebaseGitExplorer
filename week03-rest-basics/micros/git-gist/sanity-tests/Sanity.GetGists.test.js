const request = require('supertest');
const app = require('../app.js');
const debug = require('debug')('micro:gist:test');

describe('Test the root path', () => {

    test('It should be able to call /get-hidden-gists', () => {
        return request(app).get("/get-hidden-gists").then(response => {
            debug('RESPONSE', Object.keys(response));
            debug('BODY', response.body[0]);
            expect(response.statusCode).toBe(200);
        });
    });

    test('It should find a hidden gist with specific description', () => {
        return request(app).get("/get-hidden-gists").then(response => {
            let privateGistFound = false;
            debug('RESPONSE', Object.keys(response));
            debug('BODY', response.body[0]);
            for (let gist of response.body) {
                if (gist.description === "Private Gist for Testing") {
                    privateGistFound = true;
                }
            }
            expect(privateGistFound).toBe(true);
        });
    });

    test('It should be able to call /get-all-gists', () => {
        return request(app).get("/get-all-gists").then(response => {
            debug('RESPONSE', Object.keys(response));
            debug('BODY', response.body[0]);
            expect(response.statusCode).toBe(200);
        });
    });

    test('It should find a public gist with specific description', () => {
        return request(app).get("/get-all-gists").then(response => {
            let privateGistFound = false;
            debug('RESPONSE', Object.keys(response));
            debug('BODY', response.body[0]);
            for (let gist of response.body) {
                if (gist.description === "Public Gist for Testing") {
                    privateGistFound = true;
                }
            }
            expect(privateGistFound).toBe(true);
        });
    });
});
