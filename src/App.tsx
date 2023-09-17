import React from 'react';
import {FilterProvider} from "./context/FilterContext";
import ShowResturants from "./Components/ShowResturants/ShowResturants";
import NavBar from './Components/Navbar/Navbar';

function App() {
  return (
      <FilterProvider>
        <NavBar/>
        <ShowResturants/>
      </FilterProvider>
  );
}

export default App;
