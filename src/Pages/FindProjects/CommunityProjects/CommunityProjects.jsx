import React from 'react';
import PropTypes from 'prop-types';
import './CommunityProjects.sass';
import { renderingProjects } from '../../../Libs/additionalSortingFunctions';
import Preloader from '../../../Components/Preloader/Preloader';
import Pagination from '../../../Components/Pagination/Pagination';
import { KEYWORD } from '../../../Constants';


/* eslint-disable class-methods-use-this */
class CommunityProjects extends React.Component {
  componentDidMount() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const {
      projectsData,
      location,
    } = this.props;

    return (
      <div className="communityProjects wrapper">
        <div className="communityProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
          {
            projectsData.loading
              ? <Preloader style={{
                paddingTop: 30,
                display: 'flex',
                justifyContent: 'center',
              }}
              />
              : renderingProjects(projectsData.items, KEYWORD.IDEAS)
          }
        </div>
        <div className="pt-5 pb-5 pl-5 pr-5 d-f jc-c" style={{ width: '100%' }}>
          <Pagination
            projectsData={projectsData}
            location={location}
          />
        </div>
      </div>
    );
  }
}

export default CommunityProjects;


CommunityProjects.propTypes = {
  projectsData: PropTypes.object,
  location: PropTypes.object,
};
