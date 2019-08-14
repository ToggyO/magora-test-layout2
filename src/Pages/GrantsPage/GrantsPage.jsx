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
import GrantSearchEmpty from "./GrantSearch/GrantSearchEmpty";
import GrantProjectsEmpty from "./GrantProjects/GrantProjectsEmpty";
import store from "../../Store";


const GrantsPage = (props) => {

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
    stateOptionsCleaning,
  } = props;

  const [initialize, setInitialize] = useState(false);

  useEffect( () => {
    stateItemsCleaning();
    getCategoriesOptions();
    getBenefitsOptions();
    mapQueryParamsToState(parseQueryString(location.search), sortValues);
    const currentState = store.getState();
    getDataFromServer(currentState.fetchedData.history, parseQueryString(location.search), 'grants');
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
        <GrantSearchEmpty />
        <GrantProjectsEmpty grantsData={fetchedData}/>
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
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
        />
        <GrantProjects
          grantsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getGrants={getDataFromServer}
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
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(GrantsPage);
