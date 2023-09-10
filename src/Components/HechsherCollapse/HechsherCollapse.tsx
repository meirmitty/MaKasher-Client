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

const HechsherCollapse = ({resturant, expanded}: HechsherCollapseType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>(resturant.name);
    const [newPicture, setNewPicture] = useState<string | ArrayBuffer | null>('');


    return <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container spacing={2} direction={'column'}>
            <Grid item xs={12} style={{marginLeft: 10}}>
                <Grid container spacing={1} alignItems={'center'}>
                    <Grid item style={{textAlign: 'right'}}><Typography>Hechsher:</Typography></Grid>
                    <Grid item>{
                        editMode ? <TextField variant="standard" value={newName} onChange={(event) => {
                                setNewName(event.target.value)
                            }
                            }/> :
                            <Typography>{newName || resturant.name}</Typography>
                    }</Grid>
                    <Grid item>{editMode &&
                    <Button variant={'outlined'} component={'label'}><AddPhotoAlternate/>
                        <input type="file" hidden onChange={(e) => {
                            if (!e.target.files) {
                                return;
                            }
                            const file = e.target.files[0];

                            const reader = new FileReader();
                            reader.onload = () => {
                                setNewPicture(reader.result)
                            };
                            reader.readAsDataURL(file);
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
                    image={newPicture as string || 'http://www.jerusalemkoshernews.com/wp-content/uploads/rav-rubin-mehadrin-dairy-213x300.jpg'}
                    alt="Hechsher"
                />
            </Grid>
            <Grid item style={{marginBottom: 5, textAlign: 'center'}}>
                {!editMode && <Button variant={'outlined'} onClick={() => {
                    setEditMode(true)
                }}><EditIcon/></Button>}
                {
                    editMode && <ButtonGroup onClick={() => setEditMode(false)}>
                        <Button
                            onClick={() => {
                                const url = `http://localhost:3000/kashruts/add`
                                axios.post(url, {
                                    id: resturant.place_id,
                                    name: newName,
                                    picture: newPicture
                                }).then((res) => {
                                    console.log(res)
                                    setEditMode(false)
                                })
                            }}
                        ><Check/></Button>
                        <Button onClick={() => {
                            setNewName(resturant.name)
                            setNewPicture('')
                        }}><Cancel/></Button>
                    </ButtonGroup>
                }
            </Grid>
        </Grid>
    </Collapse>
}
export default HechsherCollapse