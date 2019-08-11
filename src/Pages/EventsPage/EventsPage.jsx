import React, {useState, useEffect} from 'react';
import './EventsPage.sass';
import EventSearch from "./EventSearch/EventSearch";
import EventProjects from "./EventProjects/EventProjects";
import {parse} from "qs";
import {
  mapQueryParamsToState,
  receivingEventsData,
  receivingProjectsData
} from "../../Libs/additionalSortingFunctions";
import ProjectSearchEmpty from "../FindProjects/ProjectSearch/ProjectSearchEmpty";
import CommunityProjectsEmpty from "../FindProjects/CommunityProjects/CommunityProjectsEmpty";
import {bindActionCreators} from "redux";
import {
  getBenefitsOptions,
  getCategoriesOptions
} from "../../Store/Actions/projectSearchPage/actionGetSortOptions";
import {connect} from "react-redux";
import {eventsSortValues, getEvents} from "../../Store/Actions/eventsPage/actionFetchEventsData";
import EventSearchEmpty from "./EventSearch/EventSearchEmpty";
import EventProjectsEmpty from "./EventProjects/EventProjectsEmpty";


const EventsPage = (props) => {
  const {
    fetchedEventsData,
    fetchedProjectsOptions,
    location,
    getEvents,
    eventsSortValues,
    getCategoriesOptions,
    getBenefitsOptions,
    history,
  } = props;

  const parseString = parse( props.location.search, { ignoreQueryPrefix: true });

  const [initialize, setInitialize] = useState(false);

  useEffect( () => {
    getCategoriesOptions();
    getBenefitsOptions();
    receivingEventsData(location, getEvents, fetchedEventsData);
    mapQueryParamsToState(parseString, eventsSortValues);


    // Promise.all([
    //   categoriesOptions,
    //   benefitsOptions,
    //   projectsData,
    //   mapQueryParams
    // ]).then(() => setInitialize(true));
  },[]);

  useEffect( () => {
    (fetchedEventsData.isEventsData &&
      fetchedProjectsOptions.isCategories &&
      fetchedProjectsOptions.isBenefits ) && setInitialize(true);
    console.log(initialize);

  },[fetchedEventsData.isEventsData, fetchedProjectsOptions.isCategories, fetchedProjectsOptions.isBenefits ]);


  if(!initialize) {
    console.log(initialize);
    return (
      <>
        <EventSearchEmpty />
        <EventProjectsEmpty eventsData={fetchedEventsData}/>
      </>
    )
  } else {
    console.log(initialize);
    return (

      <>
        <EventSearch
          eventsData={fetchedEventsData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getEvents}
          sortValues={eventsSortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          parseString={parseString}
        />
        <EventProjects
          projectsData={fetchedEventsData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getEvents}
          sortValues={eventsSortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          parseString={parseString}
        />
      </>
    )
  }

};


let mapStateToProps = ({ fetchedEventsData, fetchedProjectsOptions, }) => ({ fetchedEventsData, fetchedProjectsOptions, });
let mapDispatchToProps = (dispatch) => {
  return {
    getEvents: bindActionCreators(getEvents, dispatch),
    eventsSortValues: bindActionCreators(eventsSortValues, dispatch),
    getCategoriesOptions: bindActionCreators(getCategoriesOptions, dispatch),
    getBenefitsOptions: bindActionCreators(getBenefitsOptions, dispatch),
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(EventsPage);