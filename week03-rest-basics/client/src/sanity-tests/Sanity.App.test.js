import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import elfUtils from 'elven-code';
import { appInit } from '../components/app-init';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Sanity App Tests', () => {

    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    const create = () => {
        return shallow(<App appInit={appInit} />).dive();
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('is able to dive', () => {
        const wrapper = shallow(<App appInit={appInit} />);
        expect(wrapper.dive().length).toBeGreaterThan(0);
    });

    it('is wrapped in a BrowserRouter', () => {
        const wrapper = shallow(<App appInit={appInit} />);
        expect(wrapper.dive().find('BrowserRouter').length).toBe(1);
    });

    it('App.js includes the method setData', () => {
        const wrapper = create();
        expect(wrapper.instance().setData).toBeDefined();
        expect(wrapper.instance().setGistList).toBeDefined();
        expect(wrapper.instance().queryServer).toBeDefined();
    });

    it('App.js includes the method setGistList', () => {
        const wrapper = create();
        expect(wrapper.instance().setGistList).toBeDefined();
    });

    it('App.js includes the method fetchGistList', () => {
        const wrapper = create();
        expect(wrapper.instance().fetchGistList).toBeDefined();
    });

    it('App.js includes the method queryServer', () => {
        const wrapper = create();
        expect(wrapper.instance().queryServer).toBeDefined();
    });

    it('checks if App.js exists', () => {
        const fileName = __dirname + '/../../src/components/App.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });

});
