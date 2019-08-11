import React, {useEffect, useState} from 'react';
import './FindProjects.sass';
import ProjectSearch from "./ProjectSearch/ProjectSearch";
import CommunityProjects from "./CommunityProjects/CommunityProjects";
import {bindActionCreators} from "redux";
import {getProjects, sortValues, stateItemsCleaning} from "../../Store/Actions/projectSearchPage/actionFetchProjectsData";
import {getBenefitsOptions, getCategoriesOptions} from "../../Store/Actions/projectSearchPage/actionGetSortOptions";
import {connect} from "react-redux";
import {mapQueryParamsToState, receivingProjectsData} from "../../Libs/additionalSortingFunctions";
import CommunityProjectsEmpty from "./CommunityProjects/CommunityProjectsEmpty";
import ProjectSearchEmpty from "./ProjectSearch/ProjectSearchEmpty";
import {parse} from "qs";




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
    stateItemsCleaning
  } = props;

  const parseString = parse( props.location.search, { ignoreQueryPrefix: true });

  const [initialize, setInitialize] = useState(false);

  useEffect( () => {

    getCategoriesOptions();
    getBenefitsOptions();
    receivingProjectsData(location, getProjects, fetchedData);
    mapQueryParamsToState(parseString, sortValues);


    // Promise.all([
    //   categoriesOptions,
    //   benefitsOptions,
    //   projectsData,
    //   mapQueryParams
    // ]).then(() => setInitialize(true));
  },[]);
// debugger;
  useEffect( () => {
    (fetchedData.isData &&
      fetchedProjectsOptions.isCategories &&
      fetchedProjectsOptions.isBenefits ) && setInitialize(true);
    console.log(initialize);

  },[fetchedData.isData, fetchedProjectsOptions.isCategories, fetchedProjectsOptions.isBenefits ]);

  if(!initialize) {
    console.log(initialize);
    return (
      <>
        <ProjectSearchEmpty />
        <CommunityProjectsEmpty projectsData={fetchedData}/>
      </>
    )
  } else {
    console.log(initialize);
    return (

      <>
        <ProjectSearch
          projectsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getProjects}
          projectsSortValues={sortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          parseString={parseString}
        />
        <CommunityProjects
          projectsData={fetchedData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getProjects}
          projectsSortValues={sortValues}
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
    getProjects: bindActionCreators(getProjects, dispatch),
    sortValues: bindActionCreators(sortValues, dispatch),
    getCategoriesOptions: bindActionCreators(getCategoriesOptions, dispatch),
    getBenefitsOptions: bindActionCreators(getBenefitsOptions, dispatch),
    stateItemsCleaning: bindActionCreators(stateItemsCleaning, dispatch),
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
