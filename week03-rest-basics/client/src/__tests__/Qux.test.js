import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { Qux } from '../components/Qux';
import { appInit } from '../components/app-init';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });

describe('Qux Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Qux appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
