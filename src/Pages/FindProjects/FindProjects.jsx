import React, {useEffect, useState} from 'react';
import './FindProjects.sass';
import ProjectSearch from "./ProjectSearch/ProjectSearch";
import CommunityProjects from "./CommunityProjects/CommunityProjects";
import {bindActionCreators} from "redux";
import {getProjects, projectsSortValues} from "../../Store/Actions/projectSearchPage/actionFetchProjectsData";
import {getBenefitsOptions, getCategoriesOptions} from "../../Store/Actions/projectSearchPage/actionGetSortOptions";
import {connect} from "react-redux";
import {mapQueryParamsToState, receivingProjectsData} from "../../Libs/additionalSortingFunctions";
import CommunityProjectsEmpty from "./CommunityProjects/CommunityProjectsEmpty";
import ProjectSearchEmpty from "./ProjectSearch/ProjectSearchEmpty";
import {parse} from "qs";




const FindProjects = (props) => {

  const {
    fetchedProjectsData,
    fetchedProjectsOptions,
    location,
    getProjects,
    projectsSortValues,
    getCategoriesOptions,
    getBenefitsOptions,
    history,
  } = props;

  const parseString = parse( props.location.search, { ignoreQueryPrefix: true });

  const [initialize, setInitialize] = useState(false);

  useEffect( () => {
    getCategoriesOptions();
    getBenefitsOptions();
    receivingProjectsData(location, getProjects, fetchedProjectsData);
    mapQueryParamsToState(parseString, projectsSortValues);


    // Promise.all([
    //   categoriesOptions,
    //   benefitsOptions,
    //   projectsData,
    //   mapQueryParams
    // ]).then(() => setInitialize(true));
  },[]);

  useEffect( () => {
    (fetchedProjectsData.isProjectsData &&
      fetchedProjectsOptions.isCategories &&
      fetchedProjectsOptions.isBenefits ) && setInitialize(true);
    console.log(initialize);

  },[fetchedProjectsData.isProjectsData, fetchedProjectsOptions.isCategories, fetchedProjectsOptions.isBenefits ]);

  if(!initialize) {
    console.log(initialize);
    return (
      <>
        <ProjectSearchEmpty />
        <CommunityProjectsEmpty projectsData={fetchedProjectsData}/>
      </>
    )
  } else {
    console.log(initialize);
    return (

      <>
        <ProjectSearch
          projectsData={fetchedProjectsData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getProjects}
          projectsSortValues={projectsSortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          parseString={parseString}
        />
        <CommunityProjects
          projectsData={fetchedProjectsData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getProjects}
          projectsSortValues={projectsSortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          parseString={parseString}
        />
      </>
    )
  }

};


let mapStateToProps = ({ fetchedProjectsData, fetchedProjectsOptions, }) => ({ fetchedProjectsData, fetchedProjectsOptions, });
let mapDispatchToProps = (dispatch) => {
  return {
    getProjects: bindActionCreators(getProjects, dispatch),
    projectsSortValues: bindActionCreators(projectsSortValues, dispatch),
    getCategoriesOptions: bindActionCreators(getCategoriesOptions, dispatch),
    getBenefitsOptions: bindActionCreators(getBenefitsOptions, dispatch),
    // uploadSortValuesToState: bindActionCreators(uploadSortValuesToState, dispatch),
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