import { components } from 'react-select';
import React from 'react';
import Icon from '../../../Icons/Icons';


export const DropdownIndicator = props => (
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <Icon iconName='dropdownCircle' />
    </components.DropdownIndicator>
  )
);


export const ValueContainer = props => (
      <input
        type="text"
        placeholder="Active modules"
        defaultValue={props.getValue().map((elem) => ` ${elem.value}`)}
        style={
          {
            // border: 'none',
            maxWidth: 214,
            color: '#2F2F2F',
            borderColor: props.isFocused ? '#35D0DE' : 'white',
            zIndex: '-10',
            padding: 0,
          }
        }
      />
);
