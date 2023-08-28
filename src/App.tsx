import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import useGetUserLocation from "./hooks/useGetUserLocation";
import ShowResturants from "./Components/ShowResturants/ShowResturants";

export default function App() {

    return <>
        <NavBar/>
        <ShowResturants/>
    </>


}



