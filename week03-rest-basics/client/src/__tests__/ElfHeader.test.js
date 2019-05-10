import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfHeader from '../components/ElfHeader';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
configure({ adapter: new Adapter() });

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');
describe('ElfHeader Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ElfHeader />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
