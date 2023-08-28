import useGetUserLocation from "../../hooks/useGetUserLocation";
import useGetResturants from "../../hooks/useGetResturants";

const ShowResturants = () => {
    const {currentLocation} = useGetUserLocation()
    const {resturants} = useGetResturants(currentLocation)
    console.log(currentLocation)
    console.log(resturants)
    return <></>
}

export default ShowResturants