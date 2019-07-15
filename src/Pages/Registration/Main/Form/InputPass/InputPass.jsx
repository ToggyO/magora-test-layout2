import React from 'react';
import s from './InputPass.module.sass';
import eye from '../../../../../img/main/hide-password.svg'


const InputPass = () => {

  return (
    <div className={s.inputPass}>
      <input type='password' placeholder="Enter password" name='password' />
      <button>
        <img src={ eye }
             alt=""/>
      </button>
    </div>
  )
};


export default InputPass;