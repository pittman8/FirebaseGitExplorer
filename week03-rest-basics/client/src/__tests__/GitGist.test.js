import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { GitGist } from "../components/GitGist";
import {appInit} from "../components/app-init";
import ReactDOM from "react-dom";
import ElfDebugEnzyme from "../ElfDebugEnzyme";
configure({ adapter: new Adapter() });

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'GitGist.test.js');

describe('GitGist Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GitGist appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});