import React, {useEffect, useState} from 'react';
import './FindProjects.sass';
import ProjectSearch from "./ProjectSearch/ProjectSearch";
import CommunityProjects from "./CommunityProjects/CommunityProjects";
import {bindActionCreators} from "redux";
import {getProjects, projectsSortValues} from "../../Store/Actions/actionFetchProjectsData";
import {getBenefitsOptions, getCategoriesOptions} from "../../Store/Actions/actionGetSortOptions";
import {connect} from "react-redux";
import {receivingData} from "../../Libs/additionalSortingFunctions";




const FindProjects = (props) => {

  const {
    fetchedProjectsData,
    fetchedOptions,
    location,
    getProjects,
    projectsSortValues,
    getCategoriesOptions,
    getBenefitsOptions,
    history,
  } = props;

  const [initialize, setInitialize] = useState(false);

  useEffect( () => {
    window.scrollTo(0, 0);

    let categoriesOptions = getCategoriesOptions();
    let benefitsOptions = getBenefitsOptions();
    let projectsData = receivingData(location, getProjects, fetchedProjectsData);

    Promise.all([
      categoriesOptions,
      benefitsOptions,
      projectsData
    ]).then(() => setInitialize(true));

  },[]);


  if(!initialize) {
    return null;
  }

  return (
    <>
      <ProjectSearch
        projectsData={fetchedProjectsData}
        optionsData={fetchedOptions}
        location={location}
        getProjects={getProjects}
        projectsSortValues={projectsSortValues}
        getCategoriesOptions={getCategoriesOptions}
        getBenefitsOptions={getBenefitsOptions}
        history={history}
      />
      <CommunityProjects
        projectsData={fetchedProjectsData}
        optionsData={fetchedOptions}
        location={location}
        getProjects={getProjects}
        projectsSortValues={projectsSortValues}
        getCategoriesOptions={getCategoriesOptions}
        getBenefitsOptions={getBenefitsOptions}
        history={history}
      />
    </>
  )
};


let mapStateToProps = ({ fetchedProjectsData, fetchedOptions, }) => ({ fetchedProjectsData, fetchedOptions, });
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