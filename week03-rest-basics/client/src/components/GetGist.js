import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';

export class GetGist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.result,
            gistList: this.props.gistList,
            index: 0,
        };
    }

    changeIndex = (x) => {
        let index = this.state.index;
        let nextIndex = index;
        let first = this.state.gistList.length;
        if (x===0) {
            if (index===0) {
                nextIndex = first;
            } else {
                nextIndex--};
        } else if (x===1) {
            if (index===first) {
                nextIndex='0';
            } else {
                nextIndex++};
        } else {
            console.log("Out of bounds");
        };
        this.setData('index', nextIndex);
    }

    render() {
        return(
            <div className="App">
                <h1 className="App-header">Get Gist Component</h1>
                <br/>
                <div className="App-intro">
                    <p>
                        result: {this.state.result}
                    </p>
                    <p>
                        gistID: {this.state.gistList[0].id}
                    </p>
                    <button data-url="/git-gist-you-rang" onClick={this.props.queryServer}>Ring GitGist</button>
                    <button data-url="/git-gist-get-gist-list" onClick={this.props.fetchGistList}>Fetch Gist List</button>
                    <button
                        id="prev"
                        onClick={event =>
                            this.changeIndex(0, this.changeIndex, event)
                        }>
                        Prev
                    </button>
                    <button
                        id="next"
                        onClick={event =>
                            this.changeIndex(1, this.changeIndex, event)
                        }>
                        Next
                    </button>
                </div>
            </div>
        );
    }

}

GetGist.propTypes = {
    queryServer: PropTypes.func
};