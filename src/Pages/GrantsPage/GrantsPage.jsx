import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './GrantsPage.sass';
import GrantSearch from './GrantSearch/GrantSearch';
import GrantProjects from './GrantProjects/GrantProjects';
import {
  sortValues,
  stateItemsCleaning,
  getDataFromServer,
} from '../../Store/Actions/fetchedData/actionFetchProjectsData';
import {
  getBenefitsOptions,
  getCategoriesOptions,
  stateOptionsCleaning,
} from '../../Store/Actions/fetchedData/actionGetSortOptions';
import { mapQueryParamsToState, parseQueryString } from '../../Libs/HelperFunctions';
import GrantSearchEmpty from './GrantSearch/GrantSearchEmpty';
import GrantProjectsEmpty from './GrantProjects/GrantProjectsEmpty';
import store from '../../Store';
import { KEYWORD } from '../../Constants';


const GrantsPage = (props) => {
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
    optionsCleaning,
  } = props;

  const [initialize, setInitialize] = useState(false);

  useEffect(() => {
    stateCleaning();
    getCategories();
    getBenefits();
    mapQueryParamsToState(parseQueryString(location.search), valueSort);
    const currentState = store.getState();
    getData(currentState.fetchedData.history, parseQueryString(location.search), KEYWORD.GRANTS);

    return () => {
      stateCleaning();
      optionsCleaning();
    };
  }, [location.search]);
  /* eslint-disable */
  useEffect( () => {
    (fetchedData.isData
      && fetchedProjectsOptions.isCategories &&
      fetchedProjectsOptions.isBenefits ) && setInitialize(true);
  },[
    fetchedData.isData,
    fetchedProjectsOptions.isCategories,
    fetchedProjectsOptions.isBenefits
  ]);
  /* eslint-enable */


  if (!initialize) {
    return (
      <>
        <GrantSearchEmpty />
        <GrantProjectsEmpty />
      </>
    );
  }
  return (
    <>
      <GrantSearch
        grantsData={fetchedData}
        optionsData={fetchedProjectsOptions}
        location={location}
        sortValues={valueSort}
      />
      <GrantProjects
        grantsData={fetchedData}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(GrantsPage);


GrantsPage.propTypes = {
  fetchedData: PropTypes.object,
  fetchedProjectsOptions: PropTypes.object,
  location: PropTypes.object,
  sortValues: PropTypes.func,
  getCategories: PropTypes.func,
  getBenefits: PropTypes.func,
  stateCleaning: PropTypes.func,
  getData: PropTypes.func,
  optionsCleaning: PropTypes.func,
};
