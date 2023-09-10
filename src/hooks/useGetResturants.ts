import {useEffect, useState} from "react";
import {Position} from "./useGetUserLocation";
import axios from "axios";

export default function useGetResturants(currentLocation: Position | undefined) {
    const [resturants, setResturants] = useState<any>([])

    useEffect(() => {
        if (!currentLocation) {
            setResturants([])
        } else {
            const url = `http://localhost:3000/resturants/${currentLocation.longitude}/${currentLocation.latitude}`
            axios.get(url).then((response) => {
                    response.data && setResturants(response.data)
                }
            )
        }
    }, [currentLocation])

    return {resturants}
}

