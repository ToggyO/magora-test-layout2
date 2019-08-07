import React from 'react';
import './CommunityProjects.sass';
import {
  renderingProjects
} from "../../../Libs/additionalSortingFunctions";
import Preloader from "../../../Components/Preloader/Preloader";




class CommunityProjectsEmpty extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const { projectsData } = this.props;

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

        </div>
      </div>
    )
  }
}


export default CommunityProjectsEmpty;


// let mapStateToProps = ({ fetchedProjectsData }) => ({ fetchedProjectsData, });
// let mapDispatchToProps = (dispatch) => {
//   return {
//     getProjects: bindActionCreators(getProjects, dispatch),
//     projectsSortValues: bindActionCreators(projectsSortValues, dispatch),
//   }
// };
// export default connect( mapStateToProps, mapDispatchToProps )(CommunityProjects);


