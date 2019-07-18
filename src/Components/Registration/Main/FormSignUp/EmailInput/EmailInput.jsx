import React from 'react';
import s from './EmailInput.module.sass';
// import eye from "../../../../../img/main/hide-password.svg";


const EmailInput = () => {

  return (
    <div className={s.emailInput}>
      <label htmlFor="email">
        Contact information:
      </label>
      <input type="email" placeholder='Email' id='email' name='email'/>
    </div>
  )
};


export default EmailInput;