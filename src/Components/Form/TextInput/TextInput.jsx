import React from 'react';
import s from './TextInput.module.sass';
import '../FormComponentsStyle.sass';
import FormError from '../FormError/FormError';


const TextInput = (props) => {

  const { placeholder, name, value, onChange, onBlur, error, visited } = props;

  return (
    <div className={s.inputBlock}>
      <input
        className={ error && visited ? 'error' : null }
        type="text"
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


export default TextInput;