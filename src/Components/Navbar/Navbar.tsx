import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Switch} from "@material-ui/core";
import {useFilterContext} from "../../context/FilterContext";
import HighOrderSearchBar from "../HighOrderSearchBar/HighOrderSearchBar";
import SearchBar from 'material-ui-search-bar';

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
    const {setKosher, kosher} = useFilterContext()
    const {searchValue, setSearchValue} = useFilterContext();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{textAlign: 'center'}}>
                <Toolbar>
                    <HighOrderSearchBar searchBar={<SearchBar
                        value={searchValue}
                        onChange={(newValue) => {
                            setSearchValue(newValue)
                        }}
                        onCancelSearch={() => {
                            setSearchValue('')
                        }}
                        className={classes.title}
                    />}/>
                    <Typography variant="h6" className={classes.title}>
                        Ma Kasher
                    </Typography>

                    <>
                        <Typography>
                            Kosher:
                        </Typography>
                        <Switch
                            size={"medium"}
                            checked={kosher}
                            onChange={() => setKosher((!kosher))}
                        /></>
                </Toolbar>
            </AppBar>
        </div>
    );
}
