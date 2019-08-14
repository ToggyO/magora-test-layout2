import React from 'react';
import './GrantProjects.sass';
import {renderingGrants} from "../../../Libs/additionalSortingFunctions";
import Preloader from "../../../Components/Preloader/Preloader";
import Pagination from "../../../Components/Pagination/Pagination";


class GrantProjects extends React.Component {

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
    console.log('update');
  }

  render() {

    const {
      grantsData,
      location
    } = this.props;

    return (
      <div className='grantsProjects wrapper'>
        <div className="grantsProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
          {
            grantsData.loading
              ? <Preloader />
              : renderingGrants(grantsData.items)
          }
        </div>
        <div className='pt-5 pb-5 pl-5 pr-5 d-f jc-c' style={{width: '100%'}}>
          <Pagination
            projectsData={grantsData}
            location={location}
          />
        </div>
      </div>
    )
  }
}


export default GrantProjects;
