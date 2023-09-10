import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    IconButtonProps,
    styled,
    Typography
} from '@material-ui/core';
import * as React from 'react';
import {useState} from 'react';
import {ExpandMore as ExpandMoreIcon, Favorite, MoreVert, Share} from "@material-ui/icons";
import {ResturantType} from "../ShowResturants/ShowResturants";
import HechsherCollapse from "../HechsherCollapse/HechsherCollapse";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} style={{
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)'
    }}/>;
})(({theme}) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ResturantCard({resturant}: { resturant: ResturantType }) {
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleExpandClick = () => setExpanded(!expanded);

    return (<Card style={{maxWidth: "90%"}}>
            <CardHeader
                avatar={
                    <Avatar>
                        {resturant.name.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert/>
                    </IconButton>
                }
                title={resturant.name}
            />
            {resturant.photos &&
            <CardMedia
                component="img"
                height="194"
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${resturant.photos[0].photo_reference}&key=AIzaSyB0UZEfccGHd_GUDy8gI6dqzqvU8pWuDQg`}
                alt="Paella dish"
            />}
            <CardContent>
                <Typography style={{fontSize: 10}}>
                    Address: {resturant.vicinity}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite/>
                </IconButton>
                <IconButton aria-label="share">
                    <Share/>
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <HechsherCollapse resturant={resturant} expanded={expanded}/>
        </Card>
    );


}