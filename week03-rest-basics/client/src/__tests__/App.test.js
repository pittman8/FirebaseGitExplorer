import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { appInit } from '../components/app-init';
configure({ adapter: new Adapter() });
import jest from 'jest';

describe('App Tests', function() {
    xit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('found WithStyles', () => {
        const wrapper = shallow(<App appInit={appInit} />);
        wrapper.dive().find('WithStyles(App)');
    });

        it('tests fetch call in fetchGistList', async () => {
            const jest = require('jest-mock');
            window.fetch = jest.fn().mockImplementation(() => ({
                status: 200,
                json: () => new Promise((resolve, reject) => {
                    resolve({
                        gistList: [
                            {
                                id: 'unknown1',
                                description: 'unknown1',
                                ownerLogin: 'unknown1',
                                gitPullUrl: 'unknown1',
                                files: 'unknown1',
                                avatarUrl:
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png'
                            },
                            {
                                id: 'unknown2',
                                description: 'unknown2',
                                ownerLogin: 'unknown2',
                                gitPullUrl: 'unknown2',
                                files: 'unknown2',
                                avatarUrl:
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png'
                            }
                        ]
                    })
                })
            }))
            const renderedComponent = await shallow(<App appInit={appInit} />)
            await renderedComponent.fetchGistList
            const unknown = JSON.stringify(renderedComponent.instance().props.appInit.gistList[0].avatarUrl);
            expect(renderedComponent.contains(unknown)).toEqual(true); 
            console.log(JSON.stringify(renderedComponent.instance().props.appInit.gistList[0].avatarUrl))
        })

});
