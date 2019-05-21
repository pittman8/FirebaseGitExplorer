const myPromise = new Promise((resolve, reject) => {
    resolve(3);
});

myPromise.then(result => console.log(result));

/* ------------------------------------ */

const addNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a && b) {
            resolve(a + b);
        } else {
            reject('Parameter missing');
        }
    });
};

addNumbers(2, 3).then(result => console.log(result));

addNumbers(2)
    .then(result => console.log(result))
    .catch(error => console.log(error));

/* ------------------------------------ */

const fs = require('fs');

const elfWriteFile = (fileName, contents) => {
    return new Promise(function(resolve, reject) {
        fs.writeFile(fileName, contents, 'utf8', (err) => {
            if (err) {
                reject(err);
            }
            resolve({
                result: 'success'
            });
        });
    });
};

elfWriteFile('foo.txt', 'foo being printed')
    .then(result => console.log(result));

const elfReadFile = (fileName, contents) => {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            console.log(data)
        });
    });
};

elfReadFile('foo.txt', 'utf8');
