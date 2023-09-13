import {Button, ButtonGroup, CardMedia, Collapse, Grid, TextField, Typography} from "@material-ui/core";
import * as React from "react";
import {useState} from "react";
import {ResturantType} from "../ShowResturants/ShowResturants";
import EditIcon from '@material-ui/icons/Edit';
import {AddPhotoAlternate, Cancel, Check} from "@material-ui/icons";
import axios from "axios";

interface HechsherCollapseType {
    resturant: ResturantType
    expanded: boolean
}

const HechsherCollapse = ({resturant: {hechsher, place_id}, expanded}: HechsherCollapseType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>(hechsher?.kashrut || 'Not Kosher');
    const [newPicture, setNewPicture] = useState<string | ArrayBuffer | null>(hechsher?.picture || "https://yeahthatskosher.com/wp-content/uploads/2013/10/not-kosher.jpeg");
    const [newMashgiachNumber, setNewMashgiachNumber] = useState<string>(hechsher?.mashgiachNumber || '')

    return <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container spacing={2} direction={'column'} style={{marginLeft: 10}}>
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item style={{textAlign: 'right'}}><Typography>Hechsher:</Typography></Grid>
                    <Grid item>{
                        editMode ? <TextField variant="standard" value={newName}
                                              onChange={(event) => setNewName(event.target.value)
                                              }/> :
                            <Typography>{newName}</Typography>
                    }</Grid>
                    <Grid item>{editMode &&
                    <Button variant={'outlined'} component={'label'}><AddPhotoAlternate/>
                        <input type="file" hidden onChange={(e) => {
                            if (!e.target.files) {
                                return;
                            }

                            const reader = new FileReader();
                            reader.onload = () => {
                                setNewPicture(reader.result)
                            };

                            reader.readAsDataURL(e.target.files[0]);
                        }
                        }/></Button>
                    }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item id={'test'}>
                <CardMedia
                    component="img"
                    height="300"
                    image={newPicture as string}
                    alt="Hechsher"
                />
            </Grid>
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item>
                        Mashgiachs Number:
                    </Grid>
                    <Grid item>
                        {editMode ? <TextField variant="standard" value={newMashgiachNumber}
                                               onChange={(event) => setNewMashgiachNumber(event.target.value)
                                               }/> :
                            <Typography>{newMashgiachNumber}</Typography>}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginBottom: 5, textAlign: 'center'}}>
                {!editMode && <Button variant={'outlined'} onClick={() => setEditMode(true)}><EditIcon/></Button>}
                {
                    editMode && <ButtonGroup onClick={() => setEditMode(false)}>
                        <Button
                            onClick={() => {
                                const url = `http://localhost:3000/kashruts/add`
                                axios.post(url, {
                                    _id: place_id,
                                    name: newName,
                                    picture: newPicture,
                                    mashgiachNumber: newMashgiachNumber
                                }).then((res) => {
                                    console.log(res)
                                    setEditMode(false)
                                }).catch(() => {
                                    alert('There was a error updating hechsher')
                                })
                            }}
                        ><Check/></Button>
                        <Button onClick={() => {
                            setNewName(hechsher?.kashrut)
                            setNewPicture(hechsher?.picture)
                        }}><Cancel/></Button>
                    </ButtonGroup>
                }
            </Grid>
        </Grid>
    </Collapse>
}
export default HechsherCollapse