import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import GetGist from '../components/GetGist';

configure({ adapter: new Adapter() });

describe('Check Gist Display Suite', () => {

    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<GetGist
            queryServer={() => {}}
            fetchGistList={() => {}}
            result={'success'}
            gistList={[{ id: 3 }]}
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
            <GetGist
                queryServer={() => {}}
                fetchGistList={() => {}}
                result={'success'}
                gistList={[{ id: 3 }]}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks that one element has an id of id', () => {
        expect(wrapper.find('#id').length).toBe(1);
    });

    it('checks that one element has an id of description', () => {
        expect(wrapper.find('#description').length).toBe(1);
    });

    it('checks that one element has an id of ownerLogin', () => {
        expect(wrapper.find('#ownerLogin').length).toBe(1);
    });

    it('checks that one element has an id of gitPullUrl', () => {
        expect(wrapper.find('#gitPullUrl').length).toBe(1);
    });

    it('checks that one element has an id of files', () => {
        expect(wrapper.find('#files').length).toBe(1);
    });

    it('checks that one element has an id of url', () => {
        expect(wrapper.find('img').length).toBe(1);
    });
});
