import React from 'react';
import PropTypes from 'prop-types';

class GetGist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 'bar'
        };
    }

    queryServer = event => {
        const that = this;

        fetch(event.target.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                if (json.body) {
                    json.body = JSON.parse(json.body);
                }
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    fetchGistList = event => {
        const that = this;

        fetch(event.target.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json.result[0]);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return(
            <div>
                <p>ID: {gistList.id}</p>
                <button data-url="/git-gist-you-rang" onClick={this.queryServer}>Ring GitGist</button>
                <button data-url="/git-gist-get-gist-list" onClick={this.fetchGistList}>Get Gist List</button>
            </div>
        );
    }

}

GetGist.propTypes = {
    queryServer: PropTypes.func
};

export default GetGist;
