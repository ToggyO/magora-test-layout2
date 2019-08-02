import {components} from "react-select";
import React from "react";
import Icon from "../../../Icons/Icons";


export const Option = props => {
  return (
    <div> <components.Option {...props}>
      <input
        type="checkbox"
        defaultChecked={props.isSelected}
        style={
          {
            display: 'none',
            fontSize: '18px',
            fontWeight: '600',
            letterSpacing: 'normal',
            lineHeight: '18px'
          }
        }
      />
      {props.label}
      <span
        style={
          {
            position: 'absolute',
            right: '20px',
            margin: 'auto',
            display: 'inline-block',
            borderRadius: '3px',
            height: '20px',
            width: '20px',
            border: '1px solid #35d0de',
            background:  props.isSelected ? '50% 50% url("/img/findProjects/checkbox.svg")' : null
          }
        }

      >
      </span>
    </components.Option>
    </div>
  );
};


export const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Icon iconName='dropdownCircle' />
      </components.DropdownIndicator>
    )
  );
};


export const ValueContainer = props => {
  return (
      <input
        type="text"
        placeholder='Active modules'
        defaultValue={props.getValue().map((elem, i) => ` ${elem.value}`)}
        style={
          {
            // border: 'none',
            maxWidth: 214,
            color: '#2F2F2F',
            borderColor: props.isFocused ? '#35D0DE' : 'white',
            zIndex: '-10',
            padding: 0
          }
        }
      />
  );
};