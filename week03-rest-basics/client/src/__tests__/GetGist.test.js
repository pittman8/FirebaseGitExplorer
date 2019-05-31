import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import GetGist from '../components/GetGist';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';

describe('GetGist Tests', function() {
    xit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <GetGist
                queryServer={() => {}}
                fetchGistList={() => {}}
                result={'success'}
                gistList={[{ id: 3 }]}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component header', () => {
        const wrapper = shallow(
            <GetGist
                queryServer={() => {}}
                fetchGistList={() => {}}
                result={'success'}
                gistList={[{ id: 3 }]}
            />
        ).dive();
        const unknown = (
            <Typography variant="h4">Get Gist Component</Typography>
        );
        expect(wrapper.contains(unknown)).toEqual(true);
    });

    it('found WithStyles', () => {
        const wrapper = shallow(
            <GetGist
                queryServer={() => {}}
                fetchGistList={() => {}}
                result={'success'}
                gistList={[{ id: 3 }]}
            />
        );
        wrapper.dive().find('WithStyles(GetGist)');
    });
});
