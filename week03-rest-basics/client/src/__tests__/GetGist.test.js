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

    it('renders setGistList call directly', () => {
        const wrapper = shallow(<App appInit={appInit}/>);
        debug('IN TEST BUT BEFORE', wrapper.state('gistList'));
        expect(wrapper.state('gistList')).toEqual([{id: 'unknown1'}]);
        const gistListFromServer = [{id: 'found'}];
        wrapper.instance().setGistList({gistList: gistListFromServer});
        expect(wrapper.state('gistList')).toEqual(gistListFromServer);
    });
});
