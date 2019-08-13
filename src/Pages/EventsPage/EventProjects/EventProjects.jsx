import React from 'react';
import './EventProjects.sass';
import Preloader from "../../../Components/Preloader/Preloader";
import { renderingEvents} from "../../../Libs/additionalSortingFunctions";
import Pagination from "../../../Components/Pagination/Pagination";


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
      this.props.getDataFromServer(this.props.projectsData.history, this.props.parseString, 'events');
      window.scrollTo({
        left: 0,
        top: 550,
        behavior: 'smooth'
      })
    }
  }

  // componentWillUnmount() {
  //   this.props.stateItemsCleaning();
  // }

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
              ? <Preloader />
              : renderingEvents(projectsData.items)
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
