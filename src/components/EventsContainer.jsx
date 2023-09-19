import React from 'react'
import EventBlock from "./EventBlock";
import SearchBar from "./SearchBar";
import { useState } from "react";


function EventsContainer() {
    // const [data, setData] = useState("");
    // const [musicEvent, setMusicEvent] = useState("");
    // const [location, setLocation] = useState("");
    // const [location2, setLocation2] = useState("");
  
    // let tree2 = '';

    // const changeData = (newData) => {
    //   setData(newData);
    // };
  

  return (
    <div>
        <SearchBar />
        <EventBlock/>
        <EventBlock/>
        {/* <div>{data}</div>
      <div>{musicEvent}</div>
      <button onClick={searchLocation}>lol</button>
      <br></br>

      <button onClick={searchEvents}>lo2</button> */}
    </div>
  )
}

export default EventsContainer
