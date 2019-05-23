import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
//import ElfDebugEnzyme from '../tests/ElfDebugEnzyme';
import {configure} from 'enzyme';
import GetRepos from '../components/GetRepos';
import {appInit} from '../app-init';
import { createShallow } from '@material-ui/core/test-utils';
import Grid from "@material-ui/core/Grid";
//const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js', true);
configure({adapter: new Adapter()});

describe('Sanity GetRepos Layout Tests', () => {

    let wrapper = null;
    let shallow;

    beforeEach(() => {
        shallow = createShallow();
        wrapper = shallow(<GetRepos
            queryServer={() => { }}
            fetchRepoList={() => { }}
            result={'success'}
            repoList={appInit.repoList}
        />,).dive();
    });

    afterEach(() => {
        wrapper = null;
    });

    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <GetRepos
                queryServer={() => {
                }}
                fetchRepoList={() => {
                }}
                result={'success'}
                repoList={appInit.repoList}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks that GetRepos is a function', () => {
        expect(typeof GetRepos).toBe('function');
    });

    it('checks that we use CssBaseLine', () => {
        expect(wrapper.find('WithStyles(CssBaseline)').length).toBe(1);
    });

    it('checks that we use backDiv3', () => {
        console.log(wrapper.find('div').first().props().className.includes('backDiv3'));
        expect(wrapper.find('div').first().props().className.includes('backDiv3')).toBe(true);
    });

    it('checks that we use className layout in second item', () => {
        expect(wrapper.find('div').get(1).props.className.includes('layout')).toBe(true);
    });

    it('checks that the first Grid has a spacing of 24', () => {
        console.log(wrapper.find(Grid).get(0).props.spacing);
        expect(wrapper.find(Grid).get(0).props.spacing).toBe(24);
    });

    it('checks that the second Grid has xs=12', () => {
        console.log(wrapper.find(Grid).get(1).props.xs);
        expect(wrapper.find(Grid).get(1).props.xs).toBe(12);
    });

});
