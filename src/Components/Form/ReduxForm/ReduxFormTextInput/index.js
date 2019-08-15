import React from 'react';
import s from './style.module.sass';
import '../../FormComponentsStyle.sass';
import ReduxFormInputWrapper from "../ReduxFormInputWrapper/InputWrapper";


const ReduxFormTextInput = (props) => {

  const {
    input,
    label,
    type,
    placeholder,
    meta,
    style
  } = props;

  const inputId = `input-${input.name}`;
  // debugger;
  return (
    <div className={s.inputBlock}>
      <ReduxFormInputWrapper
        label={label}
        error={meta.error}
        touched={meta.touched}
        inputId={inputId}
      >
        <div className={`${s.inputBlock_texInput} ${meta.error && meta.touched ? 'error' : null}`}>
          <input
            id={inputId}
            type={type}
            placeholder={placeholder}
            value={input.value}
            name={input.name}
            onChange={input.onChange}
            onBlur={input.onBlur}
            style={style}
          />
        </div>
      </ReduxFormInputWrapper>
    </div>
  )
};

export default ReduxFormTextInput;