import React from 'react';
import './GrantProjects.sass';
import {receivingGrantsData, renderingGrants} from "../../../Libs/additionalSortingFunctions";
import Preloader from "../../../Components/Preloader/Preloader";



class GrantProjects extends React.Component {
  constructor(props) {
    super(props);

    this.receivingData = receivingGrantsData.bind(this);
  }

  render() {
    const {
      grantsData,
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

        </div>
      </div>
    )
  }
}

export default GrantProjects;