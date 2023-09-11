import {useEffect, useState} from "react";

export interface Position {
    longitude: number
    latitude: number
}

export default function useGetUserLocation() {
    const [currentLocation, setCurrentLocation] = useState<Position>();

    useEffect(() => {
        getLocation();
    },[])

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }
    }

    const success = (position: GeolocationPosition) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCurrentLocation({longitude, latitude})
    }

    const error = () => console.log("Unable to retrieve your location");

    return {getLocation, currentLocation}
}

