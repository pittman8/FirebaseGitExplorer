import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import GetUser from '../components/GetUser';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });

const renderGetUser = props => (
    <GetUser {...props} queryServer={this.queryServer} body={this.state.body} />
);

describe('GetUser Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(renderGetUser, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
