import React from 'react'
import "./ComponentStyles/EventBlock.css"
import SearchBar from './SearchBar';
import { useState } from 'react';



export const EventBlock = () => {
  

  let time ="5pm";
 

  return (
    <div className="event-block">
      <div className="event-side-a">
      <div className ="event-location">Chicago</div>
      <div className="event-time">{time}</div>
      <div className='artist-name'>Blink 182</div>
      </div>
      <div className="event-side-b">
   
      </div>
    </div>

  )
}

export default EventBlock;

