import React from 'react';
import s from './InputPass.module.sass';
import '../FormComponentsStyle.sass';
import eye from '../../../img/main/hide-password.svg'


const InputPass = (props) => {

  const { placeholder, name, value, onChange, onBlur } = props;

  return (
    <div className={s.inputPass}>
      <input
        type='password'
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button type='button'>
        <img src={ eye }
             alt=""/>
      </button>
    </div>
  )
};


export default InputPass;