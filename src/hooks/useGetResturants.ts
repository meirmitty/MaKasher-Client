import {useEffect, useState} from "react";
import {Position} from "./useGetUserLocation";
import axios from "axios";
import {ResturantType} from "../Components/ShowResturants/ShowResturants";

export default function useGetResturants(currentLocation: Position | undefined) {
    const [resturants, setResturants] = useState<ResturantType[]>([])

    useEffect(() => {
        if (!currentLocation) {
            setResturants([])
        } else {
            const url = `http://localhost:3000/resturants/${currentLocation.longitude}/${currentLocation.latitude}`
            axios.get(url).then((response) => {
                    const modifiedResturants = JSON.parse(JSON.stringify(response.data)).map((resturant: any) => {
                        resturant.hechsher = resturant._doc
                        return resturant;
                    })
                    response.data && setResturants(modifiedResturants)
                }
            )
        }
    }, [currentLocation])

    return {resturants}
}

