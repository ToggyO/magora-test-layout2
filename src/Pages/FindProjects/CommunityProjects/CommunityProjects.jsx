import React from 'react';
import './CommunityProjects.sass';
import {
  receivingProjectsData,
  renderingProjects
} from "../../../Libs/additionalSortingFunctions";
import Preloader from "../../../Components/Preloader/Preloader";
import Pagination from "../../../Components/Pagination/Pagination";



class CommunityProjects extends React.Component {
  constructor(props) {
    super(props);

    this.receivingData = receivingProjectsData.bind(this);
  }

  componentDidMount() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.receivingData(this.props.location, this.props.getProjects, this.props.projectsData)
      window.scrollTo({
        left: 0,
        top: 550,
        behavior: 'smooth'
      })
    }
  }

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


