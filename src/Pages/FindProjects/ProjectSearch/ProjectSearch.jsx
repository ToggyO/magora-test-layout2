import React from 'react';
import Select from 'react-select'
import './ProjectSearch.sass';
import {NavLink} from "react-router-dom";


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const FindProjects = () => {
  return (
    <div className='projectSearch wrapper'>
      <div className="projectSearch-container wrapper-container">
        <div className="projectSearch-content wrapper-container-content">
          <div className="projectSearch-switchBtns">
            <NavLink to='/projectSearch'>
              <button></button>
              <h6>Projects</h6>
            </NavLink>
            <NavLink to='/grantsSearch'>
              <button></button>
              <h6>Grants</h6>
            </NavLink>
            <NavLink to='/eventsSearch'>
              <button></button>
              <h6>Events</h6>
            </NavLink>
          </div>
          <div className="projectSearch-filterBlock">
            <div className="filterBlock__headlines">
              <h2>Find Projects</h2>
              <h3>that matter to you</h3>
            </div>
            <div className="filterBlock__search">
              <div className='filterBlock__search-input'>
                <input type="text"/>
                <button>Find</button>
              </div>
            </div>
            <div className="filterBlock__filters">
              <div className='filters-sort'>
                <div className='filters-sort__sortBy'>
                  <Select options={options} />
                  <Select options={options} />
                </div>
                <div className='filters-sort__activeModules'>
                  <Select options={options} />
                </div>
                <div className='filters-sort__category'>
                  <Select options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


export default FindProjects;