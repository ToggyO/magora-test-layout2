import React from 'react';
import './CommunityProjects.sass';
import Preloader from "../../../Components/Preloader/Preloader";


class CommunityProjectsEmpty extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='communityProjects wrapper'>
        <div className="communityProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
            <Preloader />
        </div>
        <div className='pt-5 pb-5 pl-5 pr-5 d-f jc-c' style={{width: '100%'}}>

        </div>
      </div>
    )
  }
}

export default CommunityProjectsEmpty;
