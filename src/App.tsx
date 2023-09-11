import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import ShowResturants from "./Components/ShowResturants/ShowResturants";
import {FilterProvider} from "./context/FilterContext";

export default function App() {

    return <>
        <FilterProvider>
            <NavBar/>
            <ShowResturants/>
        </FilterProvider>
    </>


}



