import React, {useState, useEffect} from 'react';
import './EventsPage.sass';
import EventSearch from "./EventSearch/EventSearch";
import EventProjects from "./EventProjects/EventProjects";
import {parse} from "qs";
import {
  mapQueryParamsToState,
} from "../../Libs/additionalSortingFunctions";
import {bindActionCreators} from "redux";
import {
  getBenefitsOptions,
  getCategoriesOptions
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
  } = props;

  const parseString = parse( props.location.search, { ignoreQueryPrefix: true });

  const [initialize, setInitialize] = useState(false);

  useEffect( () => {
    getCategoriesOptions();
    getBenefitsOptions();
    mapQueryParamsToState(parseString, sortValues);
    getDataFromServer(fetchedData.history, parseString, 'events');
  },[]);


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
          parseString={parseString}
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
          parseString={parseString}
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
    datePick: bindActionCreators(datePick, dispatch),
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(EventsPage);