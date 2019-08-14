import React from 'react';
import './GrantSearch.sass';
import SearchButtonsBlock from "../../../Components/SearchButtonsBlock";
import FormSearchWrapper from "../../../Components/Form/FormSearchWrapper";
import MySelect from "../../../Components/ReactSelect/components/MySelect";
import {creatorOptions, sortOptions} from "../../FindProjects/FindProjectOptions";


const GrantSearch = (props) => {

  const {
    location,
    grantsData,
    optionsData,
    sortValues,
    parseString,
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
        <FormSearchWrapper
          projectsData={grantsData}
          location={location}
        >
          <div className='filters-sort__sortBy'>
            <MySelect
              options={sortOptions}
              placeholder='Sort By...'
              sortValues={sortValues}
              value={sortOptions.filter(item => item.value === grantsData.history.sort)}
              name='sort'
            />
            <MySelect
              options={creatorOptions}
              placeholder='Choose grant creator'
              sortValues={sortValues}
              value={creatorOptions.filter(item => item.value === grantsData.history.creator)}
              name='creator'
            />
          </div>
          <div className='filters-sort__category prS-adapt__category ml-16'>
            <MySelect
              options={optionsData.categories}
              placeholder='Choose category'
              sortValues={sortValues}
              value={optionsData.categories.filter(item => item.value === grantsData.history.category)}
              name='category'
            />
          </div>
          <div className='filters-sort__benefits prS-adapt__benefits ml-16'>
            <MySelect
              options={optionsData.benefits}
              placeholder='Choose benefits'
              sortValues={sortValues}
              value={optionsData.benefits.filter(item => item.value === grantsData.history.benefit)}
              name='benefit'
            />
          </div>
        </FormSearchWrapper>

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
