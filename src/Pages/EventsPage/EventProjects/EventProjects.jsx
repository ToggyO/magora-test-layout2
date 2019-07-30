import React from 'react';
import './EventProjects.sass';
import EventCard from "../../../Components/EventCard/EventCard";
import { eventCard } from './eventCardsInfo';
import {connect} from "react-redux";
import {attendButtonSwitch} from "../../../Store/Actions/actionSwitchButtons";
import {bindActionCreators} from "redux";


const EventProjects = (props) => {

  return (
    <div className='eventsProjects wrapper'>
      <div className="eventsProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
        {eventCard.map( (card, i) => <EventCard key={i} card={card} onClick={ props.switchButton } state={ props.switchButtonState }/>)}
      </div>
    </div>
  )
};


let mapStateToProps = ({ switchButtonState }) => ( {switchButtonState,} );

let mapDispatchToProps = (dispatch) => {
  return {
    switchButton: bindActionCreators(attendButtonSwitch, dispatch)
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(EventProjects);
