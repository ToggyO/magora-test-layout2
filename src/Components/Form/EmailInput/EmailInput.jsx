import React from 'react';
import s from './EmailInput.module.sass';
import '../FormComponentsStyle.sass';
import FormError from "../FormError/FormError";
// import eye from "../../../../../img/main/hide-password.svg";


const EmailInput = (props) => {

  const { placeholder, name, value, onChange, onBlur, error, visited } = props;

  return (
      <div className={s.emailInput}>
        <label htmlFor="email">
          Contact information:
        </label>
        <input
          className={ error && visited ? 'error' : null }
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <FormError
          error={error}
          visited={visited}
        />
      </div>

  )
};


export default EmailInput;