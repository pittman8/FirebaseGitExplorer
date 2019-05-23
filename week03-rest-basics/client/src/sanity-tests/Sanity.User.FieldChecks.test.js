import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import GetUser from '../components/GetUser';

configure({ adapter: new Adapter() });

describe('Are we displaying the right fields of the user', () => {

    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<GetUser
            queryServer={() => {}}
            body={{id: 'unknown'}}
            result={'success'}
            status={'unknown'}
            server={'user'}
        />).dive();
    });

    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <GetUser
                queryServer={() => {}}
                body={{id: 'unknown'}}
                result={'success'}
                status={'unknown'}
                server={'user'}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks that one element has an id of id', () => {
        expect(wrapper.find('#id').length).toBe(1);
    });

    it('checks that one element has an id of name', () => {
        expect(wrapper.find('#name').length).toBe(1);
    });

    it('checks that one element has an id of login', () => {
        expect(wrapper.find('#login').length).toBe(1);
    });

    it('checks that one element has an id of bio', () => {
        expect(wrapper.find('#bio').length).toBe(1);
    });

    it('checks that one element has an id of location', () => {
        expect(wrapper.find('#location').length).toBe(1);
    });

    it('checks that one element has an id of url', () => {
        expect(wrapper.find('#url').length).toBe(1);
    });
});
