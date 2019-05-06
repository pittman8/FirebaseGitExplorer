import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { GetGist } from '../components/GetGist';
import { appInit } from '../components/app-init';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });

describe('GetGist Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetGist appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
