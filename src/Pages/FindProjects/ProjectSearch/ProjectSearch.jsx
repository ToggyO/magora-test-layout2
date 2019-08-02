import React, {useState, useEffect} from 'react';
import Select from 'react-select'
import './ProjectSearch.sass';
import {NavLink} from "react-router-dom";
import Icon from  '../../../Icons/Icons';
import { styles } from '../../../Components/ReactSelect/Styles/filterStyles';
import { moduleStyles } from '../../../Components/ReactSelect/Styles/modulesStyles';
import { Option, DropdownIndicator } from '../../../Components/ReactSelect/components/custom_components';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getOptions} from "../../../Store/Actions/actionGetSortOptions";
import {modulesOptions, sortOptions} from "../FindProjectOptions";
import {projectsSortValues} from "../../../Store/Actions/actionFetchProjectsData";




const ProjectSearch = (props) => {

  useEffect( () => {
      props.getOptions();
  },[]);

  const [opened, toggleOpen] = useState(false);

  if (opened && window.innerWidth <= 991) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll ';
  }

 let categoryOptions =  props.fetchedOptions.categories.map(item => {
    return {
      value: item.id,
      label: item.name
    }
  });
  let benefitsOptions =  props.fetchedOptions.benefits.map(item => {
    return {
      value: item.id,
      label: item.name
    }
  });

  const makeQueryString = (obj) => {
    let queryString = '?';
    Object.keys(obj).forEach(key => {
      if (obj[key]) {
        return queryString += `&${key}=${obj[key]}`;
      } else {
        return queryString
      }
    });
    console.log(queryString);
  };


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
          className={`projectSearch-filterBlock prS-adapt__filterBlock pl-32`}
          onSubmit={ (e) => {
              e.preventDefault();
              debugger;
              makeQueryString(props.fetchedProjectsData.history);
            }
          }
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
                  inputValue=''
                  onChange={value => props.projectsSortValues(value.value, 'sort')}

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
                  // isFocused={true}
                />
              </div>
              <div className='filters-sort__category prS-adapt__category ml-16'>
                <Select
                  components={{DropdownIndicator}}
                  styles={styles}
                  options={categoryOptions}
                  placeholder={'Choose category'}
                  inputValue=''
                  onChange={value => props.projectsSortValues(value.value, 'category')}
                />
              </div>
              <div className='filters-sort__benefits prS-adapt__benefits ml-16'>
                <Select
                  components={{DropdownIndicator}}
                  styles={styles}
                  options={benefitsOptions}
                  placeholder={'Choose benefits'}
                  inputValue=''
                  onChange={value => props.projectsSortValues(value.value, 'benefits')}
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

let mapStateToProps = ({ fetchedOptions, fetchedProjectsData, }) => ({ fetchedOptions, fetchedProjectsData, });

let mapDispatchToProps = (dispatch) => {
  return {
    getOptions: bindActionCreators(getOptions, dispatch),
    projectsSortValues: bindActionCreators(projectsSortValues, dispatch)
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(ProjectSearch);














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
