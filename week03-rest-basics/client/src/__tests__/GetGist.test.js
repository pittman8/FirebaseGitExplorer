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
        ReactDOM.render(<GetGist
            queryServer={() => {}}
            fetchGistList={() => {}}
            result={'success'}
            gistList={[{ id: 3 }]}
        />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component header', () => {
        const wrapper = shallow(<GetGist
            queryServer={() => {}}
            fetchGistList={() => {}}
            result={'success'}
            gistList={[{ id: 3 }]}
        />).dive();
        const unknown = (
            <Typography variant="h4">Get Gist Component</Typography>
        );
        expect(wrapper.contains(unknown)).toEqual(true);
    });

    // it('renders setGistList call directly', () => {
    //     const wrapper = shallow(<App appInit={appInit}/>);
    //     expect(wrapper.state('gistList')).toEqual([{id: 'unknown1'}]);
    //     const gistListFromServer = [{id: 'found'}];
    //     wrapper.instance().setGistList({gistList: gistListFromServer});
    //     expect(wrapper.state('gistList')).toEqual(gistListFromServer);
    // });
});
