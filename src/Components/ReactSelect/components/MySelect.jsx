import Select from "react-select";
import {DropdownIndicator} from "./custom_components";
import {styles} from "../Styles/filterStyles";
import React from "react";


const MySelect = (props) => {
  const {
    options,
    placeholder,
    defaultValue,
    sortValues,
    name
  } = props;

  return (
    <Select
      components={{DropdownIndicator}}
      styles={styles}
      options={options}
      placeholder={placeholder}
      inputValue=''
      onChange={value => sortValues(value.value, name)}
      defaultValue={defaultValue}
    />
  )
};

export default MySelect;