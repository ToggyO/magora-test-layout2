import React from 'react';
import './ProjectSearch.sass';
import FormSearch from '../../../Components/Form/FormSearch';
import SearchButtonsBlock from '../../../Components/SearchButtonsBlock';


const ProjectSearch = (props) => {
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
    <div className='projectSearch wrapper'>
      <div className={`projectSearch-container wrapper-container prS-adapt d-f pl-35 pr-35 pt-25 pb-25  `}>

        <SearchButtonsBlock
          projectSearchButton={{
            className: 'btn rounded roundedLarge',
            iconName: 'searchProjectIconLg',
            iconClassName: 'projectSmall',
          }}
          grantsSearchButton={{
            className: 'btn rounded roundedSmall',
            iconName: 'searchGrantsIcon',
            iconClassName: '',
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
        />

      </div>
    </div>
  )
};

export default ProjectSearch;
















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
