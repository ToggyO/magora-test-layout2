/* eslint-disable */
import React, {useState} from 'react';
import Select from 'react-select'
import './ProjectSearch.sass';
import {NavLink} from "react-router-dom";
import Icon from  '../../../Icons/Icons';
import { styles } from '../../../Components/ReactSelect/Styles/filterStyles';
import { moduleStyles } from '../../../Components/ReactSelect/Styles/modulesStyles';
import { DropdownIndicator } from '../../../Components/ReactSelect/components/custom_components';
import Option from '../../../Components/ReactSelect/components/checkbox';
import {modulesOptions, sortOptions} from "../FindProjectOptions";


const ProjectSearchEmpty = (props) => {

  const [opened, toggleOpen] = useState(false);

  // if (opened && window.innerWidth <= 991) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = 'scroll ';
  // }

  return (
    <div className='projectSearch wrapper'>
      <div className={`projectSearch-container wrapper-container prS-adapt d-f pl-35 pr-35 pt-25 pb-25  ${ opened ? 'isOpen' : null }`}>

        <div className={`projectSearch-switchBtns prS-adapt__switchBtns d-f fd-c ai-c jc-sb ${ opened ? 'isOpen' : null }-buttons`}>
          <NavLink to='/projectSearch'>
            <button className='btn rounded roundedLarge' >
              <Icon iconName='searchProjectIconLg' className='projectSmall'/>
            </button>
            <h6 className='h2-white fs-20 lh-27 fw-700 t-align-c'>Projects</h6>
          </NavLink>
          <NavLink to='/grantsSearch'>
            <button className='btn rounded roundedSmall'>
              <Icon iconName='searchGrantsIcon'/>
            </button>
            <h6 className='h2-white fs-16 lh-22 fw-700 t-align-c'>Grants</h6>
          </NavLink>
          <NavLink to='/eventsSearch'>
            <button className='btn rounded roundedSmall'>
              <Icon iconName='searchEventsIcon' />
            </button>
            <h6 className='h2-white fs-16 lh-22 fw-700 t-align-c'>Events</h6>
          </NavLink>
        </div>

        <form
          className={`filterBlock prS-adapt__filterBlock pl-32`}

          >

          <div className={`filterBlock__headlines prS-adapt__headlines h2-white fs-55 lh-75 fw-600 pb-9 ${ opened ? 'isOpen' : null }-headlines`}>
            Find Projects<span className='h2-white fs-30 lh-41 fw-600 ml-4'>that matter to you</span>
          </div>
          <div className={`filterBlock__search k prS-adapt__search pt-7 pb-7 ${ opened ? 'isOpen' : null }-search`}>
            <div
              className='filterBlock__search-input prS-adapt__search-input d-f'
              onClick={ () => toggleOpen(!opened) }
            >
              <Icon iconName='shape' className='shape__grey ml-7'/>
              <input className='fs-18 lh-22 ls-6 fw-500' type="text" placeholder='Search Projects by Postcode, Suburb or State' />
              <span>
                <button type='submit'
                  className='btn blue xs fs-20 lh-27'
                >
                  Find
                </button>
              </span>
            </div>
          </div>
          <div className='filterBlock__filters prS-adapt__filters pt-7'>
            <div className={`filters-sort prS-adapt__filters-sort d-f ${ opened ? 'isOpen' : null }-sort`}>

              <div className='filters-sort__sortBy'>
                <Select
                  components={{DropdownIndicator}}
                  styles={styles}
                  options={sortOptions}
                  placeholder={'Sort By...'}
                />
                <Select
                  components={{DropdownIndicator, Option}}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  styles={moduleStyles}
                  options={modulesOptions}
                  className='mt-6'
                  placeholder={'Active modules'}
                  inputValue=''

                />
              </div>
              <div className='filters-sort__category prS-adapt__category ml-16'>
                 <Select
                    components={{DropdownIndicator}}
                    styles={styles}
                    placeholder={'Choose category'}
                    inputValue=''
                    hasValue
                 />
              </div>
              <div className='filters-sort__benefits prS-adapt__benefits ml-16'>
                 <Select
                  components={{DropdownIndicator}}
                  styles={styles}
                  placeholder={'Choose benefits'}
                  inputValue=''

                />
              </div>
              <div
                className={`filters-sort__btn ${ opened ? 'showApplyButton' : null }`}
                style={{ display: 'none' }}
              >
                <button
                  type='submit'
                  className='btn blue sm sh-btn-sm'
                  style={{minWidth: '240px'}}
                  onClick={ () => {
                      toggleOpen(!opened);
                    }
                  }
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


export default ProjectSearchEmpty;








