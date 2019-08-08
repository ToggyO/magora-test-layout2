import React, {useState} from 'react';
import './GrantSearch.sass';
import SearchButtonsBlock from "../../../Components/SearchButtonsBlock";
import FormSearch from "../../../Components/Form/FormSearchWrapper";



const GrantSearch = (props) => {
  //
  // if (opened && window.innerWidth <= 991) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = 'scroll ';
  // }

  const {
    location,
    projectsData,
    optionsData,
    projectsSortValues
  } = props;

  return (
    <div className='grantSearch wrapper'>
      <div className={`grantSearch-container wrapper-container prS-adapt d-f pl-35 pr-35 pt-25 pb-25 `}>

        <SearchButtonsBlock
          projectSearchButton={{
            className: 'btn rounded roundedSmall',
            iconName: 'searchProjectIcon',
            iconClassName: '',
          }}
          grantsSearchButton={{
            className: 'btn rounded roundedLarge',
            iconName: 'searchGrantsIconLg',
            iconClassName: 'projectSmall',
          }}
          eventsSearchButton={{
            className: 'btn rounded roundedSmall',
            iconName: 'searchEventsIcon',
            iconClassName: '',
          }}
        />
        <FormSearch
          location={location}
          projectsData={projectsData}
          optionsData={optionsData}
          projectsSortValues={projectsSortValues}
          placeholder={{
            select_1: 'Sort By...',
            select_2: 'Active modules',
            select_3: 'Choose category',
            select_4: 'Choose benefits',
          }}
        />

      </div>
    </div>
  )
};



export default GrantSearch;













//
// import React, { type ElementConfig } from 'react';
// import Select, {components} from 'react-select'
// import './EventSearch.sass';
// import {NavLink} from "react-router-dom";
// import Icon from  '../../../Icons/Icons';
// import { styles } from  './selectStyles';
//
//
// const DropdownIndicator = (
//   props: ElementConfig<typeof components.DropdownIndicator>
// ) => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <Icon iconName='dropdownCircle' />
//     </components.DropdownIndicator>
//   );
// };
