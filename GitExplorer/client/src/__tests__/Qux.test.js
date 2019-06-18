import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Qux from '../components/Qux';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });

describe('Qux Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Qux queryServerLogin={() => {}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Test qux-you-rang button click', () => {
        const jest = require('jest-mock');
        const mockCall = jest.fn();

        const button = shallow(<button onClick={mockCall}>Ring Qux</button>);
        button.find('button').simulate('click');
        expect(mockCall.mock.calls.length).toEqual(1);
    });
});
