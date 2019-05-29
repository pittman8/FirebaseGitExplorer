import elfUtils from 'elven-code';

describe('Sanity File Structure Suite', () => {
    it('checks if ElfHeader exists', () => {
        const fileName = __dirname + '/../../src/components/ElfHeader.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if GetGist exists', () => {
        const fileName = __dirname + '/../../src/components/GetGist.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if GetUser exists', () => {
        const fileName = __dirname + '/../../src/components/GetUser.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if Qux exists', () => {
        const fileName = __dirname + '/../../src/components/Qux.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if TestRoutes exists', () => {
        const fileName = __dirname + '/../../src/components/TestRoutes.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if ShowResult Server exists', () => {
        const fileName =
            __dirname + '/../../src/components/ShowResultServer.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if elf-styles, the global place to define MUI styles, exists', () => {
        const fileName = __dirname + '/../../src/components/elf-styles.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });
});
