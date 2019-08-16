import React from 'react';
import './EventSearch.sass';
import DatePicker from "../../../Components/ReactDatePicker/DatePicker";
import SearchButtonsBlock from "../../../Components/SearchButtonsBlock";
import MySelect from "../../../Components/ReactSelect/components/MySelect";
import {sortOptions, eventTypeOptions} from "../../FindProjects/FindProjectOptions";
import FormSearchWrapper from "../../../Components/Form/FormSearchWrapper";


const EventSearch = (props) => {

  const {
    location,
    eventsData,
    optionsData,
    sortValues,
    datePick,
  } = props;

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

        <FormSearchWrapper
          projectsData={eventsData}
          location={location}
        >
          <div className='filters-sort__eventsSortBy prS-adapt__eventsSortBy'>
            <MySelect
              options={sortOptions}
              placeholder='Sort By...'
              sortValues={sortValues}
              value={sortOptions.filter(item => item.value === eventsData.history.sort)}
              name='sort'
            />
            <MySelect
              options={eventTypeOptions}
              placeholder='Choose grant creator'
              sortValues={sortValues}
              value={eventTypeOptions.filter(item => item.value === eventsData.history.type)}
              name='type'
            />
          </div>

          <div className='filters-sort__dateContainer'>
            <div className={`filters-sort__datePicker prS-adapt__date-picker d-f jc-sb`}>
              <DatePicker
                startDate={eventsData.history.startDate}
                endDate={eventsData.history.endDate}
                datePick={datePick}
              />
            </div>
            <div className='filters-sort__catBen mt-6 d-f'>
              <div className='filters-sort__category prS-adapt__eventsCategory ml-14'>
                <MySelect
                  options={optionsData.categories}
                  placeholder='Choose category'
                  sortValues={sortValues}
                  value={optionsData.categories.filter(item => item.value === eventsData.history.category)}
                  name='category'
                />
              </div>
              <div className='filters-sort__benefits prS-adapt__eventsBenefits ml-14'>
                <MySelect
                  options={optionsData.benefits}
                  placeholder='Choose benefits'
                  sortValues={sortValues}
                  value={optionsData.benefits.filter(item => item.value === eventsData.history.benefit)}
                  name='benefit'
                />
              </div>
            </div>
          </div>

        </FormSearchWrapper>


      </div>
    </div>
  )
};


export default EventSearch;













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
