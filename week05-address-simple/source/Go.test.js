import React from 'react';
import ReactDOM from 'react-dom';
import Go from './Go';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });
import ElfDebugEnzyme from './ElfDebugEnzyme';

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Go.test.js', true);

describe('Jest Create React Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Go />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<Go />);
        console.log(wrapper.debug());
        const welcome = <h1>React and Jest</h1>;
        elfDebugEnzyme.getFirst(wrapper, welcome.type, true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders Foo button click message', () => {
        const wrapper = shallow(<Go />);
        console.log(wrapper.debug());
        wrapper.instance().setFooData({ result: 'success-foo' });
        const resultData = <p>Hello success-foo</p>;
        expect(wrapper.contains(resultData)).toEqual(true);
    });

    it('renders Bar button click message', () => {
        const wrapper = shallow(<Go />);
        console.log(wrapper.debug());
        wrapper.instance().setFooData({ result: 'success-bar' });
        const resultData = <p>Hello success-bar</p>;
        expect(wrapper.contains(resultData)).toEqual(true);
    });
});
