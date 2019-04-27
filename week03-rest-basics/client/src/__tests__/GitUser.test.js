import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { GitUserYouRang } from "../components/GitUser";
import { GitUserGetUser } from "../components/GitUser";
import {appInit} from "../components/app-init";
import ReactDOM from "react-dom";
import ElfDebugEnzyme from "../ElfDebugEnzyme";
configure({ adapter: new Adapter() });

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'GitUser.test.js');

describe('GitUser Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GitUserYouRang appInit={appInit} />, div);
        ReactDOM.render(<GitUserGetUser appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});