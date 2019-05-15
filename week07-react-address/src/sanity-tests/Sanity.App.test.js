import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import elvenCode from 'elven-code';
import Adapter from 'enzyme-adapter-react-16';
//import ElfDebugEnzyme from '../tests/ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// Install elfUtils: npm i elven-code

//const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js', true);
configure({ adapter: new Adapter() });

describe('App Tests', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks if App.js exists', () => {
        const fileName = __dirname + '/../App.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if App.test.js exists', () => {
        const fileName = __dirname + '/../tests/App.test.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('checks if ElfDebugEnzyme exists', () => {
        const fileName = __dirname + '/../tests/ElfDebugEnzyme.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    it('renders and reads Typography heading text', () => {
        const wrapper = shallow(<App />).dive();
        console.log(wrapper.find(Typography).debug());
        const welcome = <Typography>Welcome to Elf Address</Typography>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders Paper', () => {
        const wrapper = shallow(<App />).dive();
        console.log(wrapper.find(Paper).debug());
        const welcome = (
            <Paper>
                <Typography variant="h5" gutterBottom>
                    Welcome to Elf Address
                </Typography>
            </Paper>
        );
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders a Button', () => {
        const wrapper = shallow(<App />).dive();
        const button = (
            <Button id="getFileAction" variant="contained" color="primary">
                Get File
            </Button>
        );
        expect(wrapper.containsMatchingElement(button)).toEqual(true);
        expect(wrapper.find(Button).prop('id')).toEqual('getFileAction');
        expect(wrapper.find(Button).prop('variant')).toEqual('contained');
        expect(wrapper.find(Button).prop('color')).toEqual('primary');
    });
});
