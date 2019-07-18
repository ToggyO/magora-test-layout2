import React from 'react';
import s from './InputPass.module.sass';
import eye from '../../../img/main/hide-password.svg'


const InputPass = (props) => {

  return (
    <div className={s.inputPass} style={props.style}>
      <input type='password' placeholder={props.placeholder} name={props.name} />
      <button type='button'>
        <img src={ eye }
             alt=""/>
      </button>
    </div>
  )
};


export default InputPass;