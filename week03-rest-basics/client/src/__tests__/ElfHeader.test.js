import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfHeader from '../components/ElfHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import { demoItems, gitItems } from '../components/tileData';
import List from '@material-ui/core/List';
configure({ adapter: new Adapter() });

describe('ElfHeader Tests', () => {
    xit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <ElfHeader />
            </Router>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('menu contains list of git items', () => {
        const wrapper = shallow(<ElfHeader />);
        const list = <List>{gitItems}</List>;
        expect(wrapper.dive().containsMatchingElement(list)).toBe(true);
    });

    it('menu contains list of demo items', () => {
        const wrapper = shallow(<ElfHeader />);
        const list = <List>{demoItems}</List>;
        expect(wrapper.dive().containsMatchingElement(list)).toBe(true);
    });
});
