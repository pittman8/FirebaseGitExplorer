import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import GetUser from '../components/GetUser';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });

describe('GetUser Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUser
            queryServer={() => {}}
            result={'success'}
            body={{
                login: 'unknown',
                id: 'unknown',
                avatar_url: 'unknown'
            }}
        />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
