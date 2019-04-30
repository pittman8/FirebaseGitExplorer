import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
configure({ adapter: new Adapter() });

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');
describe('Header Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h2 className="App-header">Welcome to React</h2>;
        elfDebugEnzyme.getLast(wrapper, 'h2', true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
