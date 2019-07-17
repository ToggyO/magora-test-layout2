import React from 'react';
import s from './TextInput.module.sass';


const TextInput = () => {

  return (
    <div className={s.inputBlock}>
      <input type="text" placeholder='First name' name='firstName'/>
    </div>
  )
};


export default TextInput;