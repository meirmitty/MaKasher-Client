import useGetUserLocation from "../../hooks/useGetUserLocation";
import useGetResturants from "../../hooks/useGetResturants";
import ResturantCard from "../ResturantCard/ResturantCard";
import {Grid} from "@material-ui/core";

export interface ResturantType {
    name: string;
    vicinity: string;
    business_status: string
    geometry: { location: any, viewport: any }
    icon: string
    icon_background_color: string
    icon_mask_base_uri: string
    opening_hours: { open_now: true }
    photos: { photo_reference: string }[]
    place_id: string
    price_level: number
    rating: number
    reference: string
    types: string[]
    user_ratings_total: 4568
    hechsher: {
        kashrut: string
        picture: string
    }
}

const ShowResturants = () => {
    const {currentLocation} = useGetUserLocation()
    const {resturants} = useGetResturants(currentLocation)
    return <Grid container spacing={2}>{resturants.map((resturant: ResturantType, index: number) =>
        <Grid item xs={4} key={index}><ResturantCard resturant={resturant}/></Grid>
    )}</Grid>

}

export default ShowResturants