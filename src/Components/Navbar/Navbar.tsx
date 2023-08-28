import React from "react";
import {AppBar, Box, Typography} from "@material-ui/core";

function NavBar() {
    return (
        <AppBar position="static">
            <Box width='100%' textAlign={'center'} height={"50px"}>
                <Typography color={'initial'}>Ma Kasher</Typography>
            </Box>
        </AppBar>
    );
}

export default (NavBar)
