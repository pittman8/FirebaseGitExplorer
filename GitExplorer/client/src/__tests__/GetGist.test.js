import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import GetGist from '../components/GetGist';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';

describe('GetGist Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <GetGist
                queryServerLogin={() => {}}
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
                queryServerLogin={() => {}}
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
                queryServerLogin={() => {}}
                fetchGistList={() => {}}
                result={'success'}
                gistList={[{ id: 3 }]}
            />
        );
        wrapper.dive().find('WithStyles(GetGist)');
    });

    it('tests prev button click', () => {
        const wrapper = shallow(
            <GetGist
                queryServerLogin={() => {}}
                fetchGistList={() => {}}
                result={'success'}
                gistList={[{ id: 1 }, { id: 2 }, { id: 3 }]}
            />
        ).dive();
        expect(wrapper.find('#prev').length).toBe(1);
        expect(wrapper.instance().state.index).toBeDefined();
        expect(wrapper.instance().state.index).toEqual(0);
        wrapper.find('#prev').simulate('click');
        expect(wrapper.instance().state.index).toEqual(2);
    });

    it('tests next button click', () => {
        const wrapper = shallow(
            <GetGist
                queryServerLogin={() => {}}
                fetchGistList={() => {}}
                result={'success'}
                gistList={[{ id: 1 }, { id: 2 }, { id: 3 }]}
            />
        ).dive();
        expect(wrapper.find('#next').length).toBe(1);
        expect(wrapper.instance().state.index).toBeDefined();
        expect(wrapper.instance().state.index).toEqual(0);
        wrapper.find('#next').simulate('click');
        expect(wrapper.instance().state.index).toEqual(1);
    });
});
