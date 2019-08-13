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
import {mapQueryParamsToState} from "../../Libs/additionalSortingFunctions";
import {parse} from "qs";
import GrantSearchEmpty from "./GrantSearch/GrantSearchEmpty";
import GrantProjectsEmpty from "./GrantProjects/GrantProjectsEmpty";


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

  const parseString = parse( props.location.search, { ignoreQueryPrefix: true });

  useEffect( () => {

    let key = Math.random() * 100000;
    console.log(key);

    getCategoriesOptions();
    getBenefitsOptions();
    mapQueryParamsToState(parseString, sortValues);
    getDataFromServer(fetchedData.history, parseString, 'grants', key);

    return () => {
      stateItemsCleaning();
      stateOptionsCleaning();
      console.log('unmount');
    };
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
          parseString={parseString}
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
    stateOptionsCleaning: bindActionCreators(stateOptionsCleaning, dispatch),
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(GrantsPage);
