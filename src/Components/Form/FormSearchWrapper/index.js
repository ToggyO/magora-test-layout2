import history from "../../../history";
import {
  makeQueryString,
  mapQueryParamsToState,
} from "../../../Libs/additionalSortingFunctions";
import Icon from "../../../Icons/Icons";
import Select from "react-select";
import {DropdownIndicator} from "../../ReactSelect/components/custom_components";
import {styles} from "../../ReactSelect/Styles/filterStyles";
import {modulesOptions, sortOptions} from "../../../Pages/FindProjects/FindProjectOptions";
import Option from "../../ReactSelect/components/checkbox";
import {moduleStyles} from "../../ReactSelect/Styles/modulesStyles";
import React, {useState, useEffect} from 'react';
import './style.sass';
import {parse} from "qs";



const FormSearchWrapper = (props) => {

  const [opened, toggleOpen] = useState(false);

  const {
    projectsData,
  } = props;

  // useEffect(() => {
  //   mapQueryParamsToState(parseString, projectsSortValues)
  // }, []);


  if (opened && window.innerWidth <= 991) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll ';
  }

  return (

    <form
      className={`filterBlock prS-adapt__filterBlock pl-32 ${ opened ? 'isOpen' : null }`}
      onSubmit={ (e) => {
          e.preventDefault();
          history.push(makeQueryString(projectsData.history));
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
            <button
              type='submit'
              className='btn blue xs fs-20 lh-27'
            >
              Find
            </button>
          </span>
        </div>
      </div>
      <div className='filterBlock__filters prS-adapt__filters pt-7'>
        <div className={`filters-sort prS-adapt__filters-sort d-f ${ opened ? 'isOpen' : null }-sort`}>

          {props.children}

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
  )
};

export default FormSearchWrapper;
