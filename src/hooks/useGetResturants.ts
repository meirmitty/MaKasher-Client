import {useEffect, useState} from "react";
import {Position} from "../hooks/useGetUserLocation";
import axios from "axios";

export default function useGetResturants(currentLocation: Position | undefined) {
    const [resturants, setResturants] = useState<any>([])

    useEffect(() => {
        if (!currentLocation) {
            setResturants([])
        } else {
            const url = `http://localhost:3000/resturants/${currentLocation.longitude}/${currentLocation.latitude}`
            axios.get(url).then((response) => {
                setResturants(response.data)
            })
            //get resturants
        }
    }, [currentLocation])

    return {resturants}
}

