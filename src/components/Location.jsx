import React, { useState } from "react";
import "./ComponentStyles/SearchBar.css"


function Location({changeData}) {

    const [location, setLocation] = React.useState("");
    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
        changeData([location])

  return (
    <div>
  
    <input  
    type="text"
     value={location}
    className="location"
    placeholder="Location"
   onChange={handleChangeLocation}
  />
  
  </div>
  )
}
}

export default Location

