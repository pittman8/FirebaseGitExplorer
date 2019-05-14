import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import '../css/App.css';

export class GetGist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    setData = (x) => {
        let index = this.state.index;
        let nextIndex = index;
        let first = this.props.gistList.length - 1;
        if (x===0) {
            if (index!==0) {
                nextIndex = nextIndex - 1;
            } else {
                nextIndex = first};

        } else if (x===1) {
            if (index!==first) {
                nextIndex=nextIndex + 1;
            } else {
                nextIndex = 0};
        };

        this.setState({index: nextIndex});
    }

    render() {
        return(
            <div className="App">
                <h1 className="App-header">Get Gist Component</h1>
                <br/>
                <div className="App-intro">
                    <p>
                        description: {this.props.gistList[this.state.index].description}
                        <br />
                        gistID: {this.props.gistList[this.state.index].id}
                        <br />
                        owner: {this.props.gistList[this.state.index].ownerLogin}

                    </p>
                    <Button
                        variant="contained"
                        color="primary"
                        data-url="/git-gist-you-rang"
                        onClick={this.props.queryServer}>
                        Ring Git Gist
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        data-url="/git-gist-get-gist-list"
                        onClick={this.props.fetchGistList}>
                        Fetch Gist List
                    </Button>
                    <Button
                        id="prev"
                        variant="contained"
                        color="primary"
                        onClick={event =>
                            this.setData(0, this.setData(), event)
                        }>
                        Prev
                    </Button>
                    <Button
                        id="next"
                        variant="contained"
                        color="primary"
                        onClick={event =>
                            this.setData(1, this.setData(), event)
                        }>
                        Next
                    </Button>
                </div>
            </div>
        );
    }

}

GetGist.propTypes = {
    setData: PropTypes.func,
    queryServer: PropTypes.func,
    fetchGistList: PropTypes.func,
};