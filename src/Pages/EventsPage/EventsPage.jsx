import React, {useState, useEffect} from 'react';
import './EventsPage.sass';
import EventSearch from "./EventSearch/EventSearch";
import EventProjects from "./EventProjects/EventProjects";
import {parse} from "qs";
import {
  mapQueryParamsToState,
  receivingEventsData,
} from "../../Libs/additionalSortingFunctions";
import {bindActionCreators} from "redux";
import {
  getBenefitsOptions,
  getCategoriesOptions
} from "../../Store/Actions/projectSearchPage/actionGetSortOptions";
import {connect} from "react-redux";
import {sortValues, getEvents} from "../../Store/Actions/projectSearchPage/actionFetchProjectsData";
import EventSearchEmpty from "./EventSearch/EventSearchEmpty";
import EventProjectsEmpty from "./EventProjects/EventProjectsEmpty";


const EventsPage = (props) => {
  const {
    fetchedData,
    fetchedProjectsOptions,
    location,
    getEvents,
    sortValues,
    getCategoriesOptions,
    getBenefitsOptions,
    history,
  } = props;

  const parseString = parse( props.location.search, { ignoreQueryPrefix: true });

  const [initialize, setInitialize] = useState(false);

  useEffect( () => {
    getCategoriesOptions();
    getBenefitsOptions();
    receivingEventsData(location, getEvents, fetchedData);
    mapQueryParamsToState(parseString, sortValues);


    // Promise.all([
    //   categoriesOptions,
    //   benefitsOptions,
    //   projectsData,
    //   mapQueryParams
    // ]).then(() => setInitialize(true));
  },[]);

  useEffect( () => {
    (fetchedData.isData &&
      fetchedProjectsOptions.isCategories &&
      fetchedProjectsOptions.isBenefits ) && setInitialize(true);
    console.log(initialize);

  },[fetchedData.isData, fetchedProjectsOptions.isCategories, fetchedProjectsOptions.isBenefits ]);


  if(!initialize) {
    console.log(initialize);
    return (
      <>
        <EventSearchEmpty />
        <EventProjectsEmpty eventsData={fetchedData}/>
      </>
    )
  } else {
    console.log(initialize);
    return (

      <>
        <EventSearch
          eventsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getEvents}
          sortValues={sortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          parseString={parseString}
        />
        <EventProjects
          projectsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getEvents}
          sortValues={sortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          parseString={parseString}
        />
      </>
    )
  }

};


let mapStateToProps = ({ fetchedData, fetchedProjectsOptions, }) => ({ fetchedData, fetchedProjectsOptions, });
let mapDispatchToProps = (dispatch) => {
  return {
    getEvents: bindActionCreators(getEvents, dispatch),
    sortValues: bindActionCreators(sortValues, dispatch),
    getCategoriesOptions: bindActionCreators(getCategoriesOptions, dispatch),
    getBenefitsOptions: bindActionCreators(getBenefitsOptions, dispatch),
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(EventsPage);
