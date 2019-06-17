import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export const gitItems = (
    <div>
        <ListItemLink button component={Link} to="/">
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemLink>
        <ListItemLink button component="a" href="elf-sign-in.html">
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
        </ListItemLink>
        <ListItemLink button component={Link} to="/firebaseLogout">
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Firebase Logout" />
        </ListItemLink>
        <ListItem button component={Link} to="/get-user">
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Get User Info" />
        </ListItem>
        <ListItem button component={Link} to="/get-repos">
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Get Repos" />
        </ListItem>
        <ListItem button component={Link} to="/get-gist">
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Get Gist" />
        </ListItem>
        <ListItem button component={Link} to="/write-gists">
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Write Gists" />
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
