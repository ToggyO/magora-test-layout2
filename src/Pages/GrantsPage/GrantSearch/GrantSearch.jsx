import React, {useState} from 'react';
import Select from 'react-select'
import './GrantSearch.sass';
import {NavLink} from "react-router-dom";
import Icon from  '../../../Icons/Icons';
import { styles } from '../../../Components/ReactSelect/Styles/filterStyles';
import { moduleStyles } from '../../../Components/ReactSelect/Styles/modulesStyles';
import {sortOptions, categoryOptions, benefitsOptions, modulesOptions} from '../GrantsPageOptions';
import { Option, DropdownIndicator } from '../../../Components/ReactSelect/components/custom_components';


const GrantSearch = () => {

  const [opened, toggleOpen] = useState(false);

  if (opened && window.innerWidth <= 991) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll ';
  }

  return (
    <div className='grantSearch wrapper'>
      <div className={`grantSearch-container wrapper-container prS-adapt d-f pl-35 pr-35 pt-25 pb-25  ${ opened ? 'isOpen' : null }`}>

        <div className={`grantSearch-switchBtns grantsAdapt__switchBtns d-f fd-c ai-c jc-sb ${ opened ? 'isOpen' : null }-buttons`}>
          <NavLink to='/projectSearch' className='d-f fd-c ai-c'>
            <button className='btn rounded roundedSmall' >
              <Icon iconName='searchProjectIcon' />
            </button>
            <h6 className='h2-white fs-16 lh-22 fw-700 t-align-c'>Projects</h6>
          </NavLink>
          <NavLink to='/grantsSearch'>
            <button className='btn rounded roundedLarge'>
              <Icon iconName='searchGrantsIconLg' className='projectSmall'/>
            </button>
            <h6 className='h2-white fs-20 lh-27 fw-700 t-align-c'>Grants</h6>
          </NavLink>
          <NavLink to='/eventsSearch'>
            <button className='btn rounded roundedSmall'>
              <Icon iconName='searchEventsIcon' />
            </button>
            <h6 className='h2-white fs-16 lh-22 fw-700 t-align-c'>Events</h6>
          </NavLink>
        </div>

        <form className={`grantSearch-filterBlock prS-adapt__filterBlock pl-32`}>
          <div className={`filterBlock__headlines prS-adapt__headlines h2-white fs-55 lh-75 fw-600 pb-9 ${ opened ? 'isOpen' : null }-headlines`}>
            Find Grants<span className='h2-white fs-30 lh-41 fw-600 ml-4'>that matter to you</span>
          </div>
          <div className={`filterBlock__search k prS-adapt__search pt-7 pb-7 ${ opened ? 'isOpen' : null }-search`}>
            <div
              className='filterBlock__search-input prS-adapt__search-input d-f'
              onClick={ () => toggleOpen(!opened) }
            >
              <Icon iconName='shape' className='shape__grey ml-7'/>
              <input className='fs-18 lh-22 ls-6 fw-500' type="text" placeholder='Search Projects by Postcode, Suburb or State' />
              <span>
                <button className='btn blue xs fs-20 lh-27'>Find</button>
              </span>
            </div>
          </div>
          <div className='filterBlock__filters prS-adapt__filters pt-7'>
            <div className={`filters-sort prS-adapt__filters-sort d-f ${ opened ? 'isOpen' : null }-sort`}>

              <div className='filters-sort__grantsSortBy'>
                <Select
                  components={{DropdownIndicator}}
                  styles={styles}
                  options={sortOptions}
                  placeholder={'Sort By...'}
                  inputValue=''
                />
                <Select
                  components={{DropdownIndicator, Option}}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  styles={moduleStyles}
                  options={categoryOptions}
                  className='mt-6'
                  placeholder={'Grant creator'}
                  inputValue=''
                  // isFocused={true}
                />
              </div>
              <div className='filters-sort__grantsCategory prS-adapt__grantsCategory ml-16'>
                <Select
                  components={{DropdownIndicator}}
                  styles={styles}
                  options={benefitsOptions}
                  placeholder={'Choose grant category'}
                  inputValue=''
                />
              </div>
              <div className='filters-sort__grantsBenefits prS-adapt__grantsBenefits ml-16'>
                <Select
                  components={{DropdownIndicator}}
                  styles={styles}
                  options={modulesOptions}
                  placeholder={'Choose grant benefits'}
                  inputValue=''
                />
              </div>
              <div
                className={`filters-sort__btn ${ opened ? 'showApplyButton' : null }`}
                style={{ display: 'none' }}
                onClick={ (e) => {
                    e.preventDefault();
                    toggleOpen(!opened);
                  }
                }
              >
                <button
                  className='btn blue sm sh-btn-sm'
                  style={{minWidth: '240px'}}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </form>

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
