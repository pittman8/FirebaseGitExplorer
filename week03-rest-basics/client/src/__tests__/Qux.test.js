import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Qux from "../components/Qux";
import {appInit} from "../components/app-init";
import App from "../components/App";
configure({ adapter: new Adapter() });

describe('Qux Tests', function() {

    it('renders and displays the default result and server names', () => {
        const wrapper = shallow(<App appInit={appInit}/>);
        const welcome = <p className="App-intro">result: unknown server: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders you rang and qux after button click', () => {
        const wrapper = shallow(<App appInit={appInit}/>);
        const wrapper2 = shallow(<Qux />);
        const result = <p className="App-intro">result: you rang server: qux</p>;
        wrapper2.find('button.youRang').simulate('click');
        expect(wrapper.contains(result)).toEqual(true);
    });
});