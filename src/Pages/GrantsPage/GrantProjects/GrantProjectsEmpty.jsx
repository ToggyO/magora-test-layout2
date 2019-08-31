import React from 'react';
import './GrantProjects.sass';
import Preloader from '../../../Components/Preloader/Preloader';


/* eslint-disable class-methods-use-this */
class GrantProjects extends React.Component {
  render() {
    return (
      <div className='grantsProjects wrapper'>
        <div className="grantsProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
          <Preloader style={{
            paddingTop: 30,
            display: 'flex',
            justifyContent: 'center',
          }}
          />
        </div>
        <div className='pt-5 pb-5 pl-5 pr-5 d-f jc-c' style={{ width: '100%' }}>

        </div>
      </div>
    );
  }
}

export default GrantProjects;
