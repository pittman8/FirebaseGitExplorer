import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const themePurple = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700]
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700]
        }
    }
});
ReactDOM.render(
    <MuiThemeProvider theme={themePurple}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
