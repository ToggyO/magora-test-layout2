import React from 'react';
import './EventSearch.sass';
import DatePicker from "../../../Components/ReactDatePicker/DatePicker";
import SearchButtonsBlock from "../../../Components/SearchButtonsBlock";
import MySelect from "../../../Components/ReactSelect/components/MySelect";
import FormSearchWrapper from "../../../Components/Form/FormSearchWrapper";



const EventSearchEmpty = (props) => {

  return (
    <div className='eventSearch wrapper'>
      <div className={`eventSearch-container wrapper-container prS-adapt d-f pl-35 pr-35 pt-25 pb-25`}>

        <SearchButtonsBlock
          projectSearchButton={{
            className: 'btn rounded roundedSmall',
            iconName: 'searchProjectIcon',
            iconClassName: '',
          }}
          grantsSearchButton={{
            className: 'btn rounded roundedSmall',
            iconName: 'searchGrantsIcon',
            iconClassName: '',
          }}
          eventsSearchButton={{
            className: 'btn rounded roundedLarge',
            iconName: 'searchEventsIconLg',
            iconClassName: 'projectSmall',
          }}
        />

        <FormSearchWrapper>
          <div className='filters-sort__eventsSortBy prS-adapt__eventsSortBy'>
            <MySelect
              placeholder='Sort By...'
              name='sort'
            />
            <MySelect
              placeholder='Choose grant creator'
              name='eventType'
            />
          </div>

          <div className='filters-sort__dateContainer'>
            <div className={`filters-sort__datePicker prS-adapt__date-picker d-f jc-sb`}>
              <DatePicker />
            </div>
            <div className='filters-sort__catBen mt-6 d-f'>
              <div className='filters-sort__category prS-adapt__eventsCategory ml-14'>
                <MySelect
                  placeholder='Choose category'
                  name='category'
                />
              </div>
              <div className='filters-sort__benefits prS-adapt__eventsBenefits ml-14'>
                <MySelect
                  placeholder='Choose benefits'
                  name='benefits'
                />
              </div>
            </div>
          </div>

        </FormSearchWrapper>


      </div>
    </div>
  )
};



export default EventSearchEmpty;













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
