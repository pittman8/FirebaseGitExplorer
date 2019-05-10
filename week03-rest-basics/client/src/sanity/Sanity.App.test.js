import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import elfUtils from 'elven-code';
import {appInit} from '../components/app-init';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import {configure, shallow} from 'enzyme';

const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js', true);
configure({adapter: new Adapter()});

describe('App Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App appInit={appInit}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // Not sure what this method is...
    // it('includes the method setData', () => {
    //     const wrapper = shallow(<App appInit={appInit}/>);
    //     expect(wrapper.instance().setData).toBeDefined();
    //     expect(wrapper.instance().setGistList).toBeDefined();
    //     expect(wrapper.instance().queryServer).toBeDefined();
    // });

    it('includes the method setGistList', () => {
        const wrapper = shallow(<App appInit={appInit}/>);
        expect(wrapper.instance().setGistList).toBeDefined();
    });

    it('includes the method fetchGistList', () => {
        const wrapper = shallow(<App appInit={appInit}/>);
        expect(wrapper.instance().fetchGistList).toBeDefined();
    });

    it('includes the method queryServer', () => {
        const wrapper = shallow(<App appInit={appInit}/>);
        expect(wrapper.instance().queryServer).toBeDefined();
    });

    it('checks if App.js exists', () => {
        const fileName = __dirname + '/../../src/components/App.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

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
});
