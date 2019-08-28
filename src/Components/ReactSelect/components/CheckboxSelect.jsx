import Select from 'react-select';
import React from 'react';
import { DropdownIndicator } from './custom_components';
import Option from './checkbox';
import { moduleStyles } from '../Styles/modulesStyles';


const CheckboxSelect = (props) => {
  const {
    options,
    placeholder,
    value,
  } = props;

  return (
    <Select
      components={{ DropdownIndicator, Option }}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      styles={moduleStyles}
      options={options}
      className='mt-6'
      placeholder={placeholder}
      inputValue=''
      // defaultValue={defaultValue}
      value={value}
    />
  );
};


export default CheckboxSelect;
