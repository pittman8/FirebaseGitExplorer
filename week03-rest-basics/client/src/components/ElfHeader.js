import React, { useState } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { gitItems, demoItems } from './tileData';
import logo from '../images/watermelon.svg';
import { styles } from './elf-styles';
import '../css/App.css';

/*
const handleToggles = () => {
    return () => handleToggle(!open); // toggle the state to force render
};
*/

const ElfHeader = ({classes}) => {
    const sideList = (
        <div className={classes.list}>
            <List>{gitItems}</List>
            <Divider />
            <List>{demoItems}</List>
        </div>
    );

    const [open, setOpen] = useState(false); //boolean state

    return (
        <div>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={() => setOpen(!open)}
                        >
                            <MenuIcon/>
                        </IconButton>

                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.flex}
                            align="center"
                        >
                            GitExplorer
                        </Typography>

                    </Toolbar>
                </AppBar>
                <div className="App-header">
                    <div className="App-logo"><img src={logo} alt="watermelon" width="100"/></div>
                    <h1>Git Explorer</h1>
                </div>
                <Drawer open={open} onClose={() => {}}>
                    <div
                        role="button"
                        onClick={() => setOpen(!open)}
                        onKeyDown={() => setOpen(!open)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        </div>
    )
};

ElfHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ElfHeader);