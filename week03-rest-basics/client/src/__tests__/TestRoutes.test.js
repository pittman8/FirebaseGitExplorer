import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { TestRoutes } from '../components/TestRoutes';
import { appInit } from '../components/app-init';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });

describe('TestRoutes Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TestRoutes appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
