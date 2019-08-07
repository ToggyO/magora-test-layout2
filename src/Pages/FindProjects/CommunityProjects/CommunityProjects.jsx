import React from 'react';
import './CommunityProjects.sass';
import {
  receivingData,
  renderingProjects
} from "../../../Libs/additionalSortingFunctions";
import Preloader from "../../../Components/Preloader/Preloader";
import Pagination from "../../../Components/Pagination/Pagination";



class CommunityProjects extends React.Component {

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.scrollToTop.then(() => window.scrollTo(0, 650))
    }
  }

  scrollToTop = new Promise(
    (resolve) =>{
      resolve(receivingData(this.props.location, this.props.getProjects, this.props.projectsData));
    }
  );


  render() {

    const {
      projectsData,
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
          <Pagination {...this.props}/>
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


// let mapStateToProps = ({ fetchedProjectsData }) => ({ fetchedProjectsData, });
// let mapDispatchToProps = (dispatch) => {
//   return {
//     getProjects: bindActionCreators(getProjects, dispatch),
//     projectsSortValues: bindActionCreators(projectsSortValues, dispatch),
//   }
// };
// export default connect( mapStateToProps, mapDispatchToProps )(CommunityProjects);


