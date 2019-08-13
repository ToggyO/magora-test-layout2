import React, {useEffect} from 'react';
import './ProjectSearch.sass';
import FormSearchWrapper from '../../../Components/Form/FormSearchWrapper';
import SearchButtonsBlock from '../../../Components/SearchButtonsBlock';
import CheckboxSelect from "../../../Components/ReactSelect/components/CheckboxSelect";
import {modulesOptions, sortOptions} from "../FindProjectOptions";
import MySelect from "../../../Components/ReactSelect/components/MySelect";


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
    projectsSortValues,
    parseString,
  } = props;

  useEffect(() => {
    // projectsData.history;
  },[ projectsData.history]);


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

        <FormSearchWrapper
          projectsData={projectsData}
          location={location}
        >
          <div className='filters-sort__sortBy'>
            <MySelect
              options={sortOptions}
              placeholder='Sort By...'
              sortValues={projectsSortValues}
              defaultValue={sortOptions.filter(item => item.value === parseString.sort)}
              name='sort'
              value={sortOptions.filter(item => item.value === projectsData.history.sort)}
            />
            <CheckboxSelect
              options={modulesOptions}
              placeholder='Active modules'
              defaultValue={modulesOptions.filter(item => parseString[item.value])}
            />
          </div>
          <div className='filters-sort__category prS-adapt__category ml-16'>
            <MySelect
              options={optionsData.categories}
              placeholder='Choose category'
              sortValues={projectsSortValues}
              defaultValue={optionsData.categories.filter(item => item.value === parseString.category)}
              name='category'
              value={optionsData.categories.filter(item => parseString.category
                ? item.value === parseString.category
                : item.value === projectsData.history.category
              )}
            />
          </div>
          <div className='filters-sort__benefits prS-adapt__benefits ml-16'>
            <MySelect
              options={optionsData.benefits}
              placeholder='Choose benefits'
              sortValues={projectsSortValues}
              defaultValue={optionsData.benefits.filter(item => item.value === parseString.benefit)}
              name='benefit'
              value={optionsData.benefits.filter(item => parseString.benefit
                ? item.value === parseString.benefit
                : item.value === projectsData.history.benefit
              )}
            />
          </div>
        </FormSearchWrapper>

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
