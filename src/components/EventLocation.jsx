import React, { useState } from "react";
import "./ComponentStyles/SearchBar.css"


function EventLocation({changeData}) {

    const [location, setLocation] = React.useState("");
    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
        changeData([location])
    }

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

export default EventLocation

