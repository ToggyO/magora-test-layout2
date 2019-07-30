import React from 'react';
import './EventsPage.sass';
import EventSearch from "./EventSearch/EventSearch";
import EventProjects from "./EventProjects/EventProjects";


const EventsPage = () => {
  return (
    <>
      <EventSearch />
      <EventProjects />
    </>
  )
};


export default EventsPage;