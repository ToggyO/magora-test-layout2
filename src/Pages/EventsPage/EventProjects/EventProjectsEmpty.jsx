import React from 'react';
import './EventProjects.sass';
import EventCard from "../../../Components/EventCard/EventCard";
import { eventCard } from './eventCardsInfo';
import Preloader from "../../../Components/Preloader/Preloader";
import {receivingEventsData, renderingEvents} from "../../../Libs/additionalSortingFunctions";
import Pagination from "../../../Components/Pagination/Pagination";


class EventProjectsEmpty extends React.Component {
  render() {

    const {
      eventsData,
    } = this.props;

    return (
      <div className='eventsProjects wrapper'>
        <div className="eventsProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
          {
            eventsData.loading
              ? <Preloader />
              : renderingEvents(eventsData.items)
          }
        </div>
        <div className='pt-5 pb-5 pl-5 pr-5 d-f jc-c' style={{width: '100%'}}>

        </div>
      </div>
    )
  }
}


export default EventProjectsEmpty;
