import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { appInit } from '../components/app-init';
configure({ adapter: new Adapter() });

describe('App Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
