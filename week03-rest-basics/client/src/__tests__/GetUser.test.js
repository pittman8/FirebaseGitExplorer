import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import GetUser from '../components/GetUser';
import ReactDOM from 'react-dom';
import GetGist from '../components/GetGist';
import Typography from '@material-ui/core/Typography';
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

    it('renders the component header', () => {
        const wrapper = shallow(<GetUser
            queryServer={() => {}}
            result={'success'}
            body={{
                login: 'unknown',
                id: 'unknown',
                avatar_url: 'unknown'
            }}
        />).dive();
        const unknown = (
            <Typography variant="h4">Get User Component</Typography>
        );
        expect(wrapper.contains(unknown)).toEqual(true);
    });
});
