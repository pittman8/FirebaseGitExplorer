import elvenCode from 'elven-code';

describe('Git Explorer confirm client, server and micros Suite', () => {
    const preface = '/../../micros/';

    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    it('checks if micros/qux/result/index.js exists', () => {
        const fileName = __dirname + preface + 'qux/routes/index.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if micros/git-user/routes/index.js exists', () => {
        const fileName = __dirname + preface + 'git-user/routes/index.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if micros/git-gest/result/index.js exists', () => {
        const fileName = __dirname + preface + 'git-gist/routes/index.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if micros/qux/source/control.js exists', () => {
        const fileName = __dirname + preface + 'qux/source/control.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if micros/git-user/source/control.js exists', () => {
        const fileName = __dirname + preface + 'git-user/source/control.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if micros/git-gist/source/control.js exists', () => {
        const fileName = __dirname + preface + 'git-gist/source/control.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });
});
