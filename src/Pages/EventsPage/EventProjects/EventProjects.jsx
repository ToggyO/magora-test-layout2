import React from 'react';
import './EventProjects.sass';
import Preloader from "../../../Components/Preloader/Preloader";
import {renderingProjects} from "../../../Libs/additionalSortingFunctions";
import Pagination from "../../../Components/Pagination/Pagination";
import PropTypes from 'prop-types';
import {KEYWORD} from '../../../Constants';



class EventProjects extends React.Component {

  componentDidMount() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
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
      <div className='eventsProjects wrapper'>
        <div className="eventsProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
          {
            projectsData.loading
              ? <Preloader style={{
                    paddingTop: 30,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                />
              : renderingProjects(projectsData.items, KEYWORD.EVENTS)
          }
        </div>
        <div className='pt-5 pb-5 pl-5 pr-5 d-f jc-c' style={{width: '100%'}}>
          <Pagination
            projectsData={projectsData}
            location={location}
          />
        </div>
      </div>
    )
  }
}


export default EventProjects;


EventProjects.propTypes = {
  projectsData: PropTypes.object,
  location: PropTypes.object,
}
