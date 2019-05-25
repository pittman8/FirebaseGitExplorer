import Image from '../images/tree-of-life.png';

export const styles = theme => ({
    root: {
        flexGrow: 1
    },
    rooter: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    backDiv: {
        //backgroundRepeat: 'no-repeat',
        height: '100%',
    },
    backDiv2: {
        //backgroundRepeat: 'no-repeat',
        height: '1000px',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'repeat'
    },
    backDiv3: {
        backgroundColor: '#ddf3ff'
    },
    paperLion: {
        flexGrow: 1,
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.primary.dark
    },
    paperLion2: {
        height: '56%',
        width: '100%',
        maxWidth: '500px',
        padding: '1%',

        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.grey
    },
    paper: {
        padding: theme.spacing.unit * 5,
        textAlign: 'center',
        color: theme.palette.primary.dark
    },
    paperHome: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    elfTypography: {
        fontSize: theme.spacing.unit * 2
    },
    containerDiv: {
        flexGrow: 1
    },
});