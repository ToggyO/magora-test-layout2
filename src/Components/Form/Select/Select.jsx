import React from 'react';
import s from './Select.module.css';
import Option from './Option/Option';
import InputWrapper from "../InputWrapper/InputWrapper";


class Select extends React.Component {

  render() {

    const { label, type, placeholder, name, value, onChange, onBlur, error, visited } = this.props;

    return (
      <div>
        <InputWrapper label={label} error={error} visited={visited}>
          <select  className={s.select} name={name} onChange={onChange} value={value}>
            {option.map( (o, i) => <Option key={i} value={o.value} title={o.title}/>)}
          </select>
        </InputWrapper>
      </div>

    )
  }
};

export default Select;