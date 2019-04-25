import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import {appInit} from '../components/app-init';
configure({ adapter: new Adapter() });

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');

describe('App Tests', function () {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App appInit={appInit} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});