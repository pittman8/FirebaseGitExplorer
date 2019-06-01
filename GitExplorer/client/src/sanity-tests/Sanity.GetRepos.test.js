import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import GetRepos from '../components/GetRepos';
import { appInit } from '../components/app-init';
import { createShallow } from '@material-ui/core/test-utils';
import Grid from '@material-ui/core/Grid';

configure({ adapter: new Adapter() });
const debug =
    process.env.REACT_APP_ELF_LOGGER === 'sanity-get-repos-test'
        ? console.log
        : () => {};

describe('Sanity GetRepos Layout Tests', () => {
    let wrapper = null;
    let shallow;

    beforeEach(() => {
        shallow = createShallow();
        wrapper = shallow(
            <GetRepos
                queryServer={() => {}}
                fetchRepoList={() => {}}
                result={'success'}
                repoList={appInit.repoList}
            />
        ).dive();
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
                queryServer={() => {}}
                fetchRepoList={() => {}}
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

    it('checks that we do NOT use CssBaseLine', () => {
        expect(wrapper.find('WithStyles(CssBaseline)').length).toBe(0);
    });

    it('checks that we do NOT use backDiv3', () => {
        debug(
            wrapper
                .find('div')
                .first()
                .props()
                .className.includes('backDiv3')
        );
        expect(
            wrapper
                .find('div')
                .first()
                .props()
                .className.includes('backDiv3')
        ).toBe(false);
    });

    it('checks that we use className layout in first div', () => {
        expect(
            wrapper
                .find('div')
                .get(0)
                .props.className.includes('layout')
        ).toBe(true);
    });

    it('checks that the first Grid has a spacing of 24', () => {
        debug(wrapper.find(Grid).get(0).props.spacing);
        expect(wrapper.find(Grid).get(0).props.spacing).toBe(24);
    });

    it('checks that the second Grid has xs=12', () => {
        debug(wrapper.find(Grid).get(1).props.xs);
        expect(wrapper.find(Grid).get(1).props.xs).toBe(12);
    });
});
