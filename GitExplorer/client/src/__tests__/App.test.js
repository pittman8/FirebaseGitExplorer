import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { appInit } from '../components/app-init';
//import Typography from '@material-ui/core/Typography';
//import GetGist from '../components/GetGist';
configure({ adapter: new Adapter() });
//import jest from 'jest';
//jest.mock('../components/App');

describe('App Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('found WithStyles', () => {
        const wrapper = shallow(<App appInit={appInit} />);
        wrapper.dive().find('WithStyles(App)');
    });

    // it('proves button click works', () => {
    //     const jest = require('jest-mock');
    //     const jestFunc = jest.fn();
    //     const wrapper = shallow(<App appInit={appInit} />);
    //     const wrapper2 = shallow(
    //         <GetGist
    //             queryServer={() => {}}
    //             fetchGistList={() => {}}
    //             result={'success'}
    //             gistList={[{ id: 1 }, { id: 2 }, { id: 3 }]}
    //         />
    //     ).dive();
    //     wrapper.instance().fetchGistList = jestFunc;
    //     wrapper2.find('#fetch').simulate('click');
    //     expect(jestFunc).toHaveBeenCalledTimes(1)
    // });

    // it('should call setGistList with valid JSON causing component refresh', () => {
    //     const wrapper = shallow(<App appInit={appInit} />);
    //     const result = <Typography>owner login: pittman8</Typography>;
    //     wrapper.instance().setGistList({gistList: ['ownerLogin: pittman8']});
    //     expect(wrapper.contains(result)).toEqual(true);
    // });
});
