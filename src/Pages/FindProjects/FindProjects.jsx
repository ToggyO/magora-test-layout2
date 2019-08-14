import React, {useEffect, useState} from 'react';
import './FindProjects.sass';
import ProjectSearch from "./ProjectSearch/ProjectSearch";
import CommunityProjects from "./CommunityProjects/CommunityProjects";
import {bindActionCreators} from "redux";
import {
  getDataFromServer,
  sortValues,
  stateItemsCleaning
} from "../../Store/Actions/fetchedData/actionFetchProjectsData";
import {
  getBenefitsOptions,
  getCategoriesOptions,
  stateOptionsCleaning
} from "../../Store/Actions/fetchedData/actionGetSortOptions";
import {connect} from "react-redux";
import {mapQueryParamsToState, parseQueryString} from "../../Libs/additionalSortingFunctions";
import CommunityProjectsEmpty from "./CommunityProjects/CommunityProjectsEmpty";
import ProjectSearchEmpty from "./ProjectSearch/ProjectSearchEmpty";
// import {parse} from "qs";
import store from "../../Store";

const FindProjects = (props) => {
  const {
    fetchedData,
    fetchedProjectsOptions,
    location,
    getProjects,
    sortValues,
    getCategoriesOptions,
    getBenefitsOptions,
    history,
    stateItemsCleaning,
    getDataFromServer,
    stateOptionsCleaning
  } = props;

  // const parseString = parse( props.location.search, { ignoreQueryPrefix: true });

  const [initialize, setInitialize] = useState(false);
  //
  // useEffect(() => {
  //   getCategoriesOptions();
  //   getBenefitsOptions();
  //
  // }, []);

  useEffect( () => {
    stateItemsCleaning();
    getCategoriesOptions();
    getBenefitsOptions();
    mapQueryParamsToState(parseQueryString(location.search), sortValues);
    const currentState = store.getState();
    getDataFromServer(currentState.fetchedData.history, parseQueryString(location.search), 'ideas');
    window.scrollTo({
      left: 0,
      top:  550,
      behavior: 'smooth'
    });
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
        <ProjectSearchEmpty />
        <CommunityProjectsEmpty projectsData={fetchedData}/>
      </>
    )
  } else {
    return (

      <>
        <ProjectSearch
          projectsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          projectsSortValues={sortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          // parseString={parseString}
        />
        <CommunityProjects
          projectsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getProjects}
          sortValues={sortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          // parseString={parseString}
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

export default connect( mapStateToProps, mapDispatchToProps )(FindProjects);





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
