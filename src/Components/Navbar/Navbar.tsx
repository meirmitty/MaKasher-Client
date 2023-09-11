import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Switch} from "@material-ui/core";
import {useFilterContext} from "../../context/FilterContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const {setKosherFilter, getKosherFilter} = useFilterContext()
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{textAlign: 'center'}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Ma Kasher
                    </Typography>
                    <>
                        <Typography>
                            Kosher:
                        </Typography>
                        <Switch
                            size={"medium"}
                            checked={getKosherFilter()}
                            onChange={() => setKosherFilter((!getKosherFilter()))}
                        /></>
                </Toolbar>
            </AppBar>
        </div>
    );
}
