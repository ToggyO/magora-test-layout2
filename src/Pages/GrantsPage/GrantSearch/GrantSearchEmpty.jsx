import React from 'react';
import './GrantSearch.sass';
import SearchButtonsBlock from "../../../Components/SearchButtonsBlock";
import FormSearchWrapper from "../../../Components/Form/FormSearchWrapper";
import MySelect from "../../../Components/ReactSelect/components/MySelect";



const GrantSearchEmpty = (props) => {

  // const {
  //   location,
  //   grantsData,
  //   sortValues
  // } = props;

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
          // projectsData={grantsData}
          // location={location}
        >

          <div className='filters-sort__sortBy'>
            <MySelect
              // options={sortOptions}
              placeholder='Sort By...'
              // sortValues={sortValues}

              name='sort'
            />
            <MySelect
              // options={creatorOptions}
              placeholder='Choose grant creator'
              // sortValues={sortValues}

              name='sort'
            />
          </div>
          <div className='filters-sort__category prS-adapt__category ml-16'>
            <MySelect
              // options={sortOptions}
              placeholder='Choose category'
              // sortValues={sortValues}

              name='category'
            />
          </div>
          <div className='filters-sort__benefits prS-adapt__benefits ml-16'>
            <MySelect
              // options={sortOptions}
              placeholder='Choose benefits'
              // sortValues={sortValues}

              name='benefits'
            />
          </div>
        </FormSearchWrapper>

      </div>
    </div>
  )
};



export default GrantSearchEmpty;













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
