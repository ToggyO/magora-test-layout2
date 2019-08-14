import React from 'react';
import './CommunityProjects.sass';
import {
  mapQueryParamsToState,
  renderingProjects
} from "../../../Libs/additionalSortingFunctions";
import Preloader from "../../../Components/Preloader/Preloader";
import Pagination from "../../../Components/Pagination/Pagination";


class CommunityProjects extends React.Component {

  componentDidMount() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
    console.log('mount');
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.props.getDataFromServer(this.props.projectsData.history, this.props.parseString, 'ideas');
      window.scrollTo({
        left: 0,
        top: 550,
        behavior: 'smooth'
      });
      mapQueryParamsToState(this.props.parseString, this.props.sortValues);
    }
    console.log('update');
  }

  // componentWillUnmount() {
  //   this.props.stateItemsCleaning();
  //   console.log('unmount');
  // }

  render() {

    const {
      projectsData,
      location
    } = this.props;

    return (
      <div className='communityProjects wrapper'>
        <div className="communityProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
          {
            projectsData.loading
              ? <Preloader />
              : renderingProjects(projectsData.items)
          }
        </div>
        <div className='pt-5 pb-5 pl-5 pr-5 d-f jc-c' style={{width: '100%'}}>
          <Pagination
            projectsData={projectsData}
            location={location}
          />
          {/*{*/}
          {/*  renderingPagination(*/}
          {/*    this.props.fetchedProjectsData.totalCardsCount,*/}
          {/*    9,*/}
          {/*    this.props.fetchedProjectsData.currentPage,*/}
          {/*    this.props.location*/}
          {/*  )*/}
          {/*}*/}
        </div>
      </div>
    )
  }
}

export default CommunityProjects;
