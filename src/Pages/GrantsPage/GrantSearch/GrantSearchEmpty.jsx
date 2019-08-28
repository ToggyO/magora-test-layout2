import React from 'react';
import './GrantSearch.sass';
import SearchButtonsBlock from '../../../Components/SearchButtonsBlock';
import FormSearchWrapper from '../../../Components/Form/FormSearchWrapper';
import MySelect from '../../../Components/ReactSelect/components/MySelect';


const GrantSearchEmpty = () => (
    <div className='grantSearch wrapper'>
      <div className="grantSearch-container wrapper-container prS-adapt d-f pl-35 pr-35 pt-25 pb-25">
        <SearchButtonsBlock
          projectSearchButton={{
            className: 'btn rounded roundedSmall',
            iconName: 'searchProjectIcon',
            iconClassName: '',
            headerStyle: 'h2-white fs-16 lh-22 fw-700 t-align-c',
          }}
          grantsSearchButton={{
            className: 'btn rounded roundedLarge',
            iconName: 'searchGrantsIconLg',
            iconClassName: 'projectSmall',
            headerStyle: 'h2-white fs-20 lh-27 fw-700 t-align-c',
          }}
          eventsSearchButton={{
            className: 'btn rounded roundedSmall',
            iconName: 'searchEventsIcon',
            iconClassName: '',
            headerStyle: 'h2-white fs-16 lh-22 fw-700 t-align-c',
          }}
        />
        <FormSearchWrapper>
          <div className='filters-sort__sortBy'>
            <MySelect
              placeholder='Sort By...'
              name='sort'
            />
            <MySelect
              placeholder='Choose grant creator'
              name='sort'
            />
          </div>
          <div className='filters-sort__category prS-adapt__category ml-16'>
            <MySelect
              placeholder='Choose category'
              name='category'
            />
          </div>
          <div className='filters-sort__benefits prS-adapt__benefits ml-16'>
            <MySelect
              placeholder='Choose benefits'
              name='benefits'
            />
          </div>
        </FormSearchWrapper>

      </div>
    </div>
);


export default GrantSearchEmpty;
