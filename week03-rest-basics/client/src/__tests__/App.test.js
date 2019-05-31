import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { appInit } from '../components/app-init';
configure({ adapter: new Adapter() });

describe('App Tests', function() {
    xit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('found WithStyles', () => {
        const wrapper = shallow(<App appInit={appInit} />);
        wrapper.dive().find('WithStyles(App)');
    });
});
