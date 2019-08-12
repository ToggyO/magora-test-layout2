import React, {useEffect, useState} from 'react';
import './GrantsPage.sass';
import GrantSearch from "./GrantSearch/GrantSearch";
import GrantProjects from "./GrantProjects/GrantProjects";
import {bindActionCreators} from "redux";
import {sortValues, getGrants, stateItemsCleaning} from "../../Store/Actions/fetchedData/actionFetchProjectsData";
import {
  getBenefitsOptions,
  getCategoriesOptions
} from '../../Store/Actions/fetchedData/actionGetSortOptions';
import {connect} from "react-redux";
import {mapQueryParamsToState, receivingGrantsData} from "../../Libs/additionalSortingFunctions";
import {parse} from "qs";
import GrantSearchEmpty from "./GrantSearch/GrantSearchEmpty";
import GrantProjectsEmpty from "./GrantProjects/GrantProjectsEmpty";


const GrantsPage = (props) => {

  const {
    fetchedData,
    fetchedProjectsOptions,
    location,
    getGrants,
    sortValues,
    getCategoriesOptions,
    getBenefitsOptions,
    history,
    stateItemsCleaning
  } = props;

  const [initialize, setInitialize] = useState(false);

  const parseString = parse( props.location.search, { ignoreQueryPrefix: true });

  useEffect( () => {
    getCategoriesOptions();
    getBenefitsOptions();
    receivingGrantsData(location, getGrants, fetchedData);
    mapQueryParamsToState(parseString, sortValues);

    // Promise.all([
    //   categoriesOptions,
    //   benefitsOptions,
    //   grantsData
    // ]).then(() => setInitialize(true));
    // console.log(initialize);

  },[]);

  useEffect( () => {
    (fetchedData.isData &&
      fetchedProjectsOptions.isCategories &&
      fetchedProjectsOptions.isBenefits ) && setInitialize(true);

  },[fetchedData.isData, fetchedProjectsOptions.isCategories, fetchedProjectsOptions.isBenefits ]);


  if(!initialize) {
    // console.log(initialize);
    return (
      <>
        <GrantSearchEmpty />
        <GrantProjectsEmpty grantsData={fetchedData}/>
      </>
    )
  } else {
    // console.log(initialize);
    return (
      <>
        <GrantSearch
          grantsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getGrants}
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
          getGrants={getGrants}
          sortValues={sortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          parseString={parseString}
          stateItemsCleaning={stateItemsCleaning}
        />
      </>
    )
  }
};


let mapStateToProps = ({ fetchedData, fetchedProjectsOptions, }) => ({ fetchedData, fetchedProjectsOptions, });
let mapDispatchToProps = (dispatch) => {
  return {
    getGrants: bindActionCreators(getGrants, dispatch),
    sortValues: bindActionCreators(sortValues, dispatch),
    getCategoriesOptions: bindActionCreators(getCategoriesOptions, dispatch),
    getBenefitsOptions: bindActionCreators(getBenefitsOptions, dispatch),
    stateItemsCleaning: bindActionCreators(stateItemsCleaning, dispatch),
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(GrantsPage);
