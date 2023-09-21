import React from "react";
import search_icon from "./assets/search.png";
import "./ComponentStyles/SearchBar.css";
import { useState } from 'react';


function SearchBar() {
  const genre =document.getElementsByClassName('genre-select');
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

      const[selection,setSelect]=useState("");
      const[location,setLocation]=useState("");


      const handleSelect=(event)=>{
        setSelect(event.target.value);
        console.log(selection)
      }
      const handleLocation=(event)=>{
        setLocation(event.target.value);
        console.log(location)
      }
 
 
 const [musicEvent, setMusicEvent] = React.useState("");
 
 // this is the function to finding the city
      async function searchLocation() {
        const url = `https://www.jambase.com/jb-api/v1/geographies/cities?geoCityName=${location}&apikey=d3d0a931-5e99-4cd6-8c01-1a4e9594fddf`;
        const options = { method: "GET", headers: { Accept: "application/json" } };
    
     
          const response = await fetch(url, options);
          const data = await response.json();
          let city= data.cities[0].identifier
        // let cityid= city.substring(city.indexOf(':')+1);
         setLocation(city);
         console.log(city)
  } 
 
      

// this is the function for finding events
    async function searchEvents() {
      const url = `https://www.jambase.com/jb-api/v1/events?genreSlug=${selection}&geoCityId=${location}&apikey=d3d0a931-5e99-4cd6-8c01-1a4e9594fddf`;
      
      const options = { method: "GET", headers: { Accept: "application/json" } };

      
        const response = await fetch(url, options);
        const data = await response.json();
        setMusicEvent(data.events);
        console.log(musicEvent);
  
    }
 


    async function asyncCall() {
      try{
        await searchLocation();
        await searchEvents();
      } catch(error) {
        console.log(error);
      }
    }
  


return (
    <div className="search-bar">

<input type='text' onChange={handleLocation} value={location} className="location"/>
<select className="genre-select" onChange={handleSelect}>
  {options.map((option) => (
    <option value={option.value}>{option.label}</option>
      ))}
  </select>


            <img
        src={search_icon}
        className="search-icon"
        onClick={asyncCall}
        />
   
    </div>
  );
}

export default SearchBar;



