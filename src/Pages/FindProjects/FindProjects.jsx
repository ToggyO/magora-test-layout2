import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './FindProjects.sass';
import PropTypes from 'prop-types';
import ProjectSearch from './ProjectSearch/ProjectSearch';
import CommunityProjects from './CommunityProjects/CommunityProjects';
import {
  getDataFromServer,
  sortValues,
  stateItemsCleaning,
} from '../../Store/Actions/fetchedData/actionFetchProjectsData';
import {
  getBenefitsOptions,
  getCategoriesOptions,
  stateOptionsCleaning,
} from '../../Store/Actions/fetchedData/actionGetSortOptions';

import { mapQueryParamsToState, parseQueryString } from '../../Libs/HelperFunctions';
import CommunityProjectsEmpty from './CommunityProjects/CommunityProjectsEmpty';
import ProjectSearchEmpty from './ProjectSearch/ProjectSearchEmpty';
import store from '../../Store';

import { KEYWORD } from '../../Constants';


const FindProjects = (props) => {
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
    getData(
      currentState.fetchedData.history,
      parseQueryString(location.search),
      KEYWORD.IDEAS,
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
    fetchedProjectsOptions.isBenefits
  ]);
  /* eslint-enable */

  if (!initialize) {
    return (
      <>
        <ProjectSearchEmpty />
        <CommunityProjectsEmpty />
      </>
    );
  }
  return (

    <>
      <ProjectSearch
        projectsData={fetchedData}
        optionsData={fetchedProjectsOptions}
        location={location}
        projectsSortValues={valueSort}
      />
      <CommunityProjects
        projectsData={fetchedData}
        location={location}
      />
    </>
  );
};


const mapStateToProps = ({ fetchedData, fetchedProjectsOptions }) => ({
  fetchedData, fetchedProjectsOptions,
});

const mapDispatchToProps = (dispatch) => ({
  getData: bindActionCreators(getDataFromServer, dispatch),
  valueSort: bindActionCreators(sortValues, dispatch),
  getCategories: bindActionCreators(getCategoriesOptions, dispatch),
  getBenefits: bindActionCreators(getBenefitsOptions, dispatch),
  stateCleaning: bindActionCreators(stateItemsCleaning, dispatch),
  optionsCleaning: bindActionCreators(stateOptionsCleaning, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindProjects);


FindProjects.propTypes = {
  fetchedData: PropTypes.object,
  fetchedProjectsOptions: PropTypes.object,
  location: PropTypes.object,
  valueSort: PropTypes.func,
  getCategories: PropTypes.func,
  getBenefits: PropTypes.func,
  stateCleaning: PropTypes.func,
  getData: PropTypes.func,
  optionsCleaning: PropTypes.func,
};

// componentDidMount() {
//   this.state = {
//     data: {}
//   };
//
//   fetch1((data) => {
//     this.setState('data', {...this.state.data, ...data}); // delay 100ms // 12:01:1ms
//   });
//   fetch2((data) => {
//     this.setState('data', {...this.state.data, ...data}); // delay 100ms // 12:01:2ms
//   });
//   fetch3((data) => {
//     this.setState('data', {...this.state.data, ...data}); // delay 100ms // 12:01:3ms
//   });
// }
//
// render() {
//   if (!this.state.data.user && !this.state.data.list) {
//     return <input defaultValue={''} />;
//   }
//
//   return (
//     <input defaultValue={null} />
//   )
// }
//
// return (
// const dataLength = Object.keys(this.state.data).length;
//
// <>
//   <ProjectSearch key={dataLength} {...props}/>
//   <CommunityProjects {...props}/>
// </>
// )
// };
