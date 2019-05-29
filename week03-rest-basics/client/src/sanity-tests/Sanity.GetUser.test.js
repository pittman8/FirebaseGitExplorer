import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import GetUser from '../components/GetUser';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

configure({ adapter: new Adapter() });

const debug =
    process.env.REACT_APP_ELF_LOGGER === 'sanity-get-user'
        ? console.log
        : () => {};

describe('Sanity GetUser Layout Tests', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(
            <GetUser
                queryServer={() => {}}
                result={'success'}
                body={{
                    login: 'unknown',
                    id: 'unknown',
                    avatar_url:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Wind-turbine-icon.svg/128px-Wind-turbine-icon.svg.png'
                }}
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
            <GetUser
                queryServer={() => {}}
                result={'success'}
                body={{
                    login: 'unknown',
                    id: 'unknown',
                    avatar_url:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Wind-turbine-icon.svg/128px-Wind-turbine-icon.svg.png'
                }}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks that we do NOT use CssBaseLine', () => {
        expect(wrapper.find('WithStyles(CssBaseline)').length).toBe(0);
    });

    it('checks that we do NOT use backDiv3', () => {
        debug(
            wrapper
                .find('div')
                .first()
                .props().className
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

    it('checks for Paper', () => {
        debug(wrapper.find(Paper).get(1).props.className);
        expect(
            wrapper
                .find(Paper)
                .get(1)
                .props.className.includes('paperLion')
        ).toBe(true);
    });
});
