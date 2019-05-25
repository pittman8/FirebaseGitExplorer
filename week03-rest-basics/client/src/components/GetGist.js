import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import '../css/App.css';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './elf-styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Grid from '@material-ui/core/Grid';


class GetGist extends Component {
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
        //const { classes } = this.props;
        return(
            <React.Fragment>
                <CssBaseline>
                <h1 className="App-header">Get Gist Component</h1>
                <br/>
                <div className='backDiv3'>
                    <div className='layout'>
                        <Typography id="description" variant="h6">description: {this.props.gistList[this.state.index].description}</Typography>
                        <Typography id="id" variant="h6">gistID: {this.props.gistList[this.state.index].id}</Typography>
                        <Typography id="ownerLogin" variant="h6">owner login: {this.props.gistList[this.state.index].ownerLogin}</Typography>
                        <Typography id="gitPullUrl" variant="h6">gitPullUrl: {this.props.gistList[this.state.index].gitPullUrl}</Typography>
                        <Typography id="files" variant="h6">files: {this.props.gistList[this.state.index].files}</Typography>
                    </div>
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
                </CssBaseline>
            </React.Fragment>

        );
    }

}

GetGist.propTypes = {
    setData: PropTypes.func,
    queryServer: PropTypes.func,
    fetchGistList: PropTypes.func
};

export default withStyles(styles)(GetGist);