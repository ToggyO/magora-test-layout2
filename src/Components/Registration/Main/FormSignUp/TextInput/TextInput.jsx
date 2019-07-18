import React from 'react';
import s from './TextInput.module.sass';


const TextInput = (props) => {

  return (
    <div className={s.inputBlock}>
      <input type="text" placeholder={props.placeholder} name='firstName'/>
    </div>
  )
};


export default TextInput;