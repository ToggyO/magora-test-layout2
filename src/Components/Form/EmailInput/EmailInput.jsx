import React from 'react';
import s from './EmailInput.module.sass';
import '../FormComponentsStyle.sass';
// import eye from "../../../../../img/main/hide-password.svg";


const EmailInput = (props) => {

  const { placeholder, name, value, onChange, onBlur } = props;

  return (
    <div className={s.emailInput}>
      <label htmlFor="email">
        Contact information:
      </label>
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
};


export default EmailInput;