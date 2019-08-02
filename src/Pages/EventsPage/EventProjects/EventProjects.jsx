import React from 'react';
import './EventProjects.sass';
import EventCard from "../../../Components/EventCard/EventCard";
import { eventCard } from './eventCardsInfo';


const EventProjects = (props) => {

  return (
    <div className='eventsProjects wrapper'>
      <div className="eventsProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
        {eventCard.map( (card, i) => <EventCard key={i} card={card} />)}
      </div>
      <button  >111</button>
    </div>
  )
};


export default EventProjects;
