import {Button, ButtonGroup, CardMedia, Collapse, Grid, TextField, Typography} from "@material-ui/core";
import * as React from "react";
import {useState} from "react";
import {ResturantType} from "../ShowResturants/ShowResturants";
import EditIcon from '@material-ui/icons/Edit';
import {Cancel, Check} from "@material-ui/icons";

interface HechsherCollapseType {
    resturant: ResturantType
    expanded: boolean
}

const HechsherCollapse = ({resturant, expanded}: HechsherCollapseType) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    return <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container spacing={2} direction={'column'}>
            <Grid item xs={12} style={{marginLeft: 10}}>
                <Grid container spacing={1} alignItems={'center'}>
                    <Grid item style={{textAlign: 'right'}}><Typography>Hechsher:</Typography></Grid>
                    <Grid item>{
                        editMode ? <TextField variant="standard" placeholder={resturant.name}/> :
                            <Typography>{resturant.name}</Typography>
                    }</Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CardMedia
                    component="img"
                    height="300"
                    src={'http://www.jerusalemkoshernews.com/wp-content/uploads/rav-rubin-mehadrin-dairy-213x300.jpg'}
                    alt="Hechsher"
                />
            </Grid>
            <Grid item style={{marginBottom: 5, textAlign: 'center'}}>
                {!editMode && <Button variant={'outlined'} onClick={() => {
                    setEditMode(true)
                }}><EditIcon/></Button>}
                {
                    editMode && <ButtonGroup onClick={() => setEditMode(false)}>
                        <Button><Check/></Button>
                        <Button><Cancel/></Button>
                    </ButtonGroup>
                }
            </Grid>
        </Grid>
    </Collapse>
}
export default HechsherCollapse