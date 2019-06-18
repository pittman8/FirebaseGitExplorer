import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import TestRoutes from '../components/TestRoutes';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });

describe('TestRoutes Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TestRoutes queryServerLogin={() => {}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Test api/foo button click', () => {
        const jest = require('jest-mock');
        const mockCall = jest.fn();

        const button = shallow(
            <button onClick={mockCall}>Test Foo Route</button>
        );
        button.find('button').simulate('click');
        expect(mockCall.mock.calls.length).toEqual(1);
    });
});
