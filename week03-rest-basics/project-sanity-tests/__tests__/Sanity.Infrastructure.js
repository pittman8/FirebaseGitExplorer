import elvenCode from 'elven-code';
import ElfLogger from '../lib/elf-logger';
const debug = new ElfLogger('infostructure');

describe('Git Explorer confirm client, server and micros Suite', () => {

    const preface = '/../../';

    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    it('checks if client/src/components/App.js exists', () => {
        const fileName = __dirname + preface + 'client/src/components/App.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if server/app.js exists', () => {
        const fileName = __dirname + preface + 'server/app.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if .babelrc exists', () => {
        const fileName = __dirname + preface + '.babelrc';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if eslint and prettier files exist', () => {
        const eslintRc = __dirname + preface + '.eslintrc.json';
        const eslintIgnore = __dirname + preface + '.eslintignore';
        const prettier = __dirname + preface + 'prettier';
        const prettierIgnore = __dirname + preface + '.prettierignore';
        expect(elvenCode.elfUtils.fileExists(eslintRc)).toBe(true);
        expect(elvenCode.elfUtils.fileExists(eslintIgnore)).toBe(true);
        expect(elvenCode.elfUtils.fileExists(prettier)).toBe(true);
        expect(elvenCode.elfUtils.fileExists(prettierIgnore)).toBe(true);
    });

    it('checks if start client exists', () => {
        const startClient = __dirname + preface + 'start-client.js';
        expect(elvenCode.elfUtils.fileExists(startClient)).toBe(true);
    });

    it('checks content of .babelrc', (done) => {
        const fileName = __dirname + preface + '.babelrc';
        elvenCode.elfUtils
            .readFile(fileName)
            .then(json => {
                const babelrc = JSON.parse(json.result);
                expect(babelrc.plugins).toBeTruthy();
                expect(babelrc.presets).toBeTruthy();
                expect(babelrc.env).toBeTruthy();
                debug.log(babelrc.plugins);
                done();
            });
    });

    it('checks content of package.json', (done) => {
        const fileName = __dirname + preface + 'package.json';
        elvenCode.elfUtils
            .readFile(fileName)
            .then(json => {
                const packageJson = JSON.parse(json.result);
                expect(packageJson.dependencies).toBeTruthy();
                expect(packageJson.devDependencies).toBeTruthy();
                expect(packageJson.scripts).toBeTruthy();
                debug.log(packageJson.plugins);
                done();
            });
    });
});
