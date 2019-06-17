import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import elfUtils from 'elven-code';
import { appInit } from '../components/app-init';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Sanity App Tests', () => {
    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    const create = () => {
        const wrapper = shallow(
            <BrowserRouter>
                <App appInit={appInit} />
                );
            </BrowserRouter>
        );
        return wrapper
            .find('WithStyles(App)')
            .dive()
            .dive();
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <App appInit={appInit} />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('appears to be valid', () => {
        const wrapper = create();
        expect(wrapper.length).toBeGreaterThan(0);
    });

    it('App.js includes the method setData', () => {
        const wrapper = create();
        expect(wrapper.instance().setData).toBeDefined();
        expect(wrapper.instance().setGistList).toBeDefined();
        expect(wrapper.instance().queryServerLogin).toBeDefined();
    });

    it('App.js includes the method setGistList', () => {
        const wrapper = create();
        expect(wrapper.instance().setGistList).toBeDefined();
    });

    it('App.js includes the method fetchGistList', () => {
        const wrapper = create();
        expect(wrapper.instance().fetchGistList).toBeDefined();
    });

    it('App.js includes the method queryServerLogin', () => {
        const wrapper = create();
        expect(wrapper.instance().queryServerLogin).toBeDefined();
    });

    it('checks if App.js exists', () => {
        const fileName = __dirname + '/../../src/components/App.js';
        expect(elfUtils.elfUtils.fileExists(fileName)).toBe(true);
    });
});
