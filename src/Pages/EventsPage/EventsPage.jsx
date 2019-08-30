import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './EventsPage.sass';
import EventSearch from './EventSearch/EventSearch';
import EventProjects from './EventProjects/EventProjects';
import {
  mapQueryParamsToState, parseQueryString,
} from '../../Libs/HelperFunctions';

import {
  getBenefitsOptions,
  getCategoriesOptions, stateOptionsCleaning,
} from '../../Store/Actions/fetchedData/actionGetSortOptions';

import {
  sortValues,
  stateItemsCleaning,
  datePick,
  getDataFromServer,
} from '../../Store/Actions/fetchedData/actionFetchProjectsData';
import EventSearchEmpty from './EventSearch/EventSearchEmpty';
import EventProjectsEmpty from './EventProjects/EventProjectsEmpty';
import store from '../../Store';

import { KEYWORD } from '../../Constants';


const EventsPage = (props) => {
  const {
    fetchedData,
    fetchedProjectsOptions,
    location,
    valueSort,
    getCategories,
    getBenefits,
    // history,
    stateCleaning,
    getData,
    pickDate,
    optionsCleaning,
  } = props;

  const [initialize, setInitialize] = useState(false);

  useEffect(() => {
    stateCleaning();
    getCategories();
    getBenefits();
    mapQueryParamsToState(parseQueryString(location.search), valueSort);
    const currentState = store.getState();
    getData(
      currentState.fetchedData.history,
      parseQueryString(location.search),
      KEYWORD.EVENTS,
    );

    return () => {
      stateCleaning();
      optionsCleaning();
    };
  }, [location.search]);

  /* eslint-disable */
  useEffect(() => {
    fetchedData.isData
    && fetchedProjectsOptions.isCategories
    && fetchedProjectsOptions.isBenefits
    && setInitialize(true);
  }, [
    fetchedData.isData,
    fetchedProjectsOptions.isCategories,
    fetchedProjectsOptions.isBenefits,
  ]);
  /* eslint-enable */

  if (!initialize) {
    return (
      <>
        <EventSearchEmpty/>
        <EventProjectsEmpty eventsData={fetchedData}/>
      </>
    );
  }
  return (

    <>
      <EventSearch
        eventsData={fetchedData}
        optionsData={fetchedProjectsOptions}
        location={location}
        sortValues={valueSort}
        // history={history}
        datePick={pickDate}
      />
      <EventProjects
        projectsData={fetchedData}
        location={location}
      />
    </>
  );
};


const mapStateToProps = ({ fetchedData, fetchedProjectsOptions }) => ({
  fetchedData,
  fetchedProjectsOptions,
});
const mapDispatchToProps = (dispatch) => ({
  getData: bindActionCreators(getDataFromServer, dispatch),
  valueSort: bindActionCreators(sortValues, dispatch),
  getCategories: bindActionCreators(getCategoriesOptions, dispatch),
  getBenefits: bindActionCreators(getBenefitsOptions, dispatch),
  stateCleaning: bindActionCreators(stateItemsCleaning, dispatch),
  optionsCleaning: bindActionCreators(stateOptionsCleaning, dispatch),
  pickDate: bindActionCreators(datePick, dispatch),

});

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);


EventsPage.propTypes = {
  fetchedData: PropTypes.object,
  fetchedProjectsOptions: PropTypes.object,
  location: PropTypes.object,
  valueSort: PropTypes.func,
  getCategories: PropTypes.func,
  getBenefits: PropTypes.func,
  stateItems: PropTypes.func,
  getData: PropTypes.func,
  datePick: PropTypes.func,
  stateOptionsCleaning: PropTypes.func,
};
