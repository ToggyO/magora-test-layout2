import React, {useEffect, useState} from 'react';
import './GrantsPage.sass';
import GrantSearch from "./GrantSearch/GrantSearch";
import GrantProjects from "./GrantProjects/GrantProjects";
import {bindActionCreators} from "redux";
import {
  sortValues,
  stateItemsCleaning,
  getDataFromServer
} from "../../Store/Actions/fetchedData/actionFetchProjectsData";
import {
  getBenefitsOptions,
  getCategoriesOptions, stateOptionsCleaning
} from '../../Store/Actions/fetchedData/actionGetSortOptions';
import {connect} from "react-redux";
import {mapQueryParamsToState, parseQueryString} from "../../Libs/additionalSortingFunctions";
import GrantSearchEmpty from './GrantSearch/GrantSearchEmpty';
import GrantProjectsEmpty from './GrantProjects/GrantProjectsEmpty';
import store from '../../Store';
import PropTypes from 'prop-types';
import {KEYWORD} from '../../Constants';


const GrantsPage = (props) => {

  const {
    fetchedData,
    fetchedProjectsOptions,
    location,
    sortValues,
    getCategoriesOptions,
    getBenefitsOptions,
    // history,
    stateItemsCleaning,
    getDataFromServer,
    stateOptionsCleaning,
  } = props;

  const [initialize, setInitialize] = useState(false);

  useEffect( () => {
    stateItemsCleaning();
    getCategoriesOptions();
    getBenefitsOptions();
    mapQueryParamsToState(parseQueryString(location.search), sortValues);
    const currentState = store.getState();
    getDataFromServer(currentState.fetchedData.history, parseQueryString(location.search), KEYWORD.GRANTS);

    return () => {
      stateItemsCleaning();
      stateOptionsCleaning();
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
        <GrantSearchEmpty />
        <GrantProjectsEmpty />
      </>
    )
  } else {
    return (
      <>
        <GrantSearch
          grantsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          sortValues={sortValues}
        />
        <GrantProjects
          grantsData={fetchedData}
          location={location}
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
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(GrantsPage);


GrantsPage.propTypes = {
  fetchedData: PropTypes.object,
  fetchedProjectsOptions: PropTypes.object,
  location: PropTypes.object,
  sortValues: PropTypes.func,
  getCategoriesOptions: PropTypes.func,
  getBenefitsOptions: PropTypes.func,
  stateItemsCleaning: PropTypes.func,
  getDataFromServer: PropTypes.func,
  stateOptionsCleaning: PropTypes.func,
}
