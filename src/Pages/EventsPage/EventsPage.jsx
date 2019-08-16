import React, {useState, useEffect} from 'react';
import './EventsPage.sass';
import EventSearch from "./EventSearch/EventSearch";
import EventProjects from "./EventProjects/EventProjects";
import {
  mapQueryParamsToState, parseQueryString,
} from "../../Libs/additionalSortingFunctions";
import {bindActionCreators} from "redux";
import {
  getBenefitsOptions,
  getCategoriesOptions, stateOptionsCleaning
} from "../../Store/Actions/fetchedData/actionGetSortOptions";
import {connect} from "react-redux";
import {
  sortValues,
  stateItemsCleaning,
  datePick,
  getDataFromServer
} from "../../Store/Actions/fetchedData/actionFetchProjectsData";
import EventSearchEmpty from "./EventSearch/EventSearchEmpty";
import EventProjectsEmpty from "./EventProjects/EventProjectsEmpty";
import store from "../../Store";


const EventsPage = (props) => {
  const {
    fetchedData,
    fetchedProjectsOptions,
    location,
    sortValues,
    getCategoriesOptions,
    getBenefitsOptions,
    history,
    stateItemsCleaning,
    getDataFromServer,
    datePick,
    stateOptionsCleaning
  } = props;

  const [initialize, setInitialize] = useState(false);

  useEffect( () => {
    stateItemsCleaning();
    getCategoriesOptions();
    getBenefitsOptions();
    mapQueryParamsToState(parseQueryString(location.search), sortValues);
    const currentState = store.getState();
    getDataFromServer(currentState.fetchedData.history, parseQueryString(location.search), 'events');
    console.log('mount');

    return () => {
      stateItemsCleaning();
      stateOptionsCleaning();
      console.log('unmount');
    };
  },[location.search]);


  useEffect( () => {
    (fetchedData.isData &&
      fetchedProjectsOptions.isCategories &&
      fetchedProjectsOptions.isBenefits ) && setInitialize(true);
  },[
    fetchedData.isData,
    fetchedProjectsOptions.isCategories,
    fetchedProjectsOptions.isBenefits
  ]);


  if(!initialize) {
    return (
      <>
        <EventSearchEmpty />
        <EventProjectsEmpty eventsData={fetchedData}/>
      </>
    )
  } else {
    return (

      <>
        <EventSearch
          eventsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          sortValues={sortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          datePick={datePick}
        />
        <EventProjects
          projectsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getDataFromServer}
          sortValues={sortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          stateItemsCleaning={stateItemsCleaning}
          getDataFromServer={getDataFromServer}
        />
      </>
    )
  }

};


let mapStateToProps = ({ fetchedData, fetchedProjectsOptions, }) => ({ fetchedData, fetchedProjectsOptions, });
let mapDispatchToProps = (dispatch) => {
  return {
    getDataFromServer: bindActionCreators(getDataFromServer, dispatch),
    sortValues: bindActionCreators(sortValues, dispatch),
    getCategoriesOptions: bindActionCreators(getCategoriesOptions, dispatch),
    getBenefitsOptions: bindActionCreators(getBenefitsOptions, dispatch),
    stateItemsCleaning: bindActionCreators(stateItemsCleaning, dispatch),
    stateOptionsCleaning: bindActionCreators(stateOptionsCleaning, dispatch),
    datePick: bindActionCreators(datePick, dispatch),

  }
};

export default connect( mapStateToProps, mapDispatchToProps )(EventsPage);
