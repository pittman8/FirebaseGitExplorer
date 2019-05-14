import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export const gitItems = (
    <div>
        <ListItem button component={Link} to="/get-user">
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Get User" />
        </ListItem>
        <ListItem button component={Link} to="/get-gist">
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Get Gist" />
        </ListItem>

    </div>
);

export const demoItems = (
    <div>
        <ListItemLink button component={Link} to="/qux">
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Qux" />
        </ListItemLink>

        <ListItemLink button component={Link} to="/test-routes">
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Test Routes" />
        </ListItemLink>
    </div>
);