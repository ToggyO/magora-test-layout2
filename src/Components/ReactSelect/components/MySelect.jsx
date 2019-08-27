import React from 'react';
import Select from 'react-select';
import { DropdownIndicator } from './custom_components';
import { styles } from '../Styles/filterStyles';


const MySelect = (props) => {
  const {
    options,
    placeholder,
    defaultValue,
    sortValues,
    name,
    value,
  } = props;

  return (
    <Select
      components={{ DropdownIndicator }}
      styles={styles}
      options={options}
      placeholder={placeholder}
      inputValue=''
      onChange={(v) => sortValues(v.value, name)}
      defaultValue={defaultValue}
      value={value}
    />
  );
};

export default MySelect;
