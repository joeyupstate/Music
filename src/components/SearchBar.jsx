import React from "react";
import search_icon from "./assets/search.png";
import "./ComponentStyles/SearchBar.css";
import { useState } from 'react';
import Selector from './Selector';
import Location from "./Location";

function SearchBar() {
    const options = [
        { value: "blues", label: "Blues" },
        { value: "christian", label: "Christian" },
        { value: "classical", label: "Classical" },
        { value: "country", label: "Country" },
        { value: "edm", label: "EDM" },
        { value: "folk", label: "Folk" },
        { value: "indie", label: "Inde" },
        { value: "jamband", label: "Jamband" },
        { value: "jazz", label: "Jazz" },
        { value: "latin", label: "Latin" },
        { value: "metal", label: "Metal" },
        { value: "punk", label: "Punk" },
        { value: "reggae", label: "Reggae" },
        { value: "rhythm-and-blues-soul", label: "RnB" },
        { value: "rock", label: "Rock" }
      ];
      const[data,setData]=useState("");
      const changeData = (newData) => {
        setData(newData);
      };
    
//   const [location, setLocation] = React.useState("");
//   const [musicEvent, setMusicEvent] = React.useState("");
 
//   const handleChangeLocation = (event) => {
//     setLocation(event.target.value);
//     console.log(location)
//   };

//   const handleClick = () => {
//     setLocation(location);
//     setGenre(genre);
   

//   };

    //this is the function for finding events
    // async function searchEvents() {
    //     const url = `https://www.jambase.com/jb-api/v1/events?genreSlug=${genre}&geoCityId=jambase%${location}&apikey=d3d0a931-5e99-4cd6-8c01-1a4e9594fddf`;
        
    //     const options = { method: "GET", headers: { Accept: "application/json" } };
  
    //     try {
    //       const response = await fetch(url, options);
    //       const data = await response.json();
    //       setMusicEvent(data.events.name);
    //       console.log(musicEvent);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    
      // this is the function to finding the city
    //   async function searchLocation() {
    //     const url = `https://www.jambase.com/jb-api/v1/geographies/cities?geoCityName=${location}&apikey=d3d0a931-5e99-4cd6-8c01-1a4e9594fddf`;
    //     const options = { method: "GET", headers: { Accept: "application/json" } };
    
    //     try {
    //       const response = await fetch(url, options);
    //       const data = await response.json();
    //     let city= data.cities[0].identifier;
    //     let cityid= city.substring(city.indexOf(':')+1);
    //      setLocation(cityid);
  
       
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

return (
    <div className="search-bar">
 <Location changeData={changeData}/>
<Selector options={options} className="s-genre"/>
  <div>{data}</div>
      <img
        src={search_icon}
        className="search-icon"/>
   
    </div>
  );
}

export default SearchBar;
