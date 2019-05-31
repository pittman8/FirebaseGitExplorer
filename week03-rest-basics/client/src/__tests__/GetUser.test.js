import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import GetUser from '../components/GetUser';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { appInit } from '../components/app-init';
import GetRepos from '../components/GetRepos';
configure({ adapter: new Adapter() });

const userWrapper = shallow(
    <GetUser
        queryServer={() => {}}
        result={'success'}
        body={{
            login: 'unknown',
            id: 'unknown',
            avatar_url: 'unknown'
        }}
    />
).dive();

const repoWrapper = shallow(
    <GetRepos
        queryServer={() => {}}
        fetchRepoList={() => {}}
        result={'success'}
        repoList={appInit.repoList}
    />
).dive();

describe('GetUser Tests', function() {
    xit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <GetUser
                queryServer={() => {}}
                result={'success'}
                body={{
                    login: 'unknown',
                    id: 'unknown',
                    avatar_url: 'unknown'
                }}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders GetUser header', () => {
        const unknown = (
            <Typography variant="h4">Get User Component</Typography>
        );
        expect(userWrapper.contains(unknown)).toEqual(true);
    });

    it('renders GetRepos header', () => {
        const unknown = (
            <Typography variant="h4">Get Repos Component</Typography>
        );
        expect(repoWrapper.contains(unknown)).toEqual(true);
    });

    it('found WithStyles in GetUser', () => {
        userWrapper.find('WithStyles(GetUser)');
    });

    it('found WithStyles in GetRepos', () => {
        repoWrapper.find('WithStyles(GetRepos)');
    });

    // it('Test click event', () => {
    //     // const jest = require('jest-mock');
    //     // const mockCallBack = jest.fn();
    //     //
    //     // const button = shallow((<Button onClick={mockCallBack}>Ring Get User</Button>));
    //     // button.find('button').simulate('click');
    //     // expect(userWrapper).mockCallBack.toHaveBeenCalled();
    // });
});
