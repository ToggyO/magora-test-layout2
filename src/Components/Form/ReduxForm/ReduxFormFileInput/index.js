import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.sass';
import '../../FormComponentsStyle.sass';
import ReduxFormInputWrapper from '../ReduxFormInputWrapper/InputWrapper';


const ReduxFormFileInput = (props) => {
  const {
    input,
    label,
    placeholder,
    meta,
    styleWrapper,
    styleInput,
    isRequired,
  } = props;

  const inputId = `input-${input.name}`;

  const fileInput = React.createRef();

  const fileChange = () => {
    console.log(fileInput.current.files[0]);
  };

  return (
    <div className={s.inputBlock}>
      <ReduxFormInputWrapper
        label={label}
        error={meta.error}
        touched={meta.touched}
        inputId={inputId}
        isRequired={isRequired}
        style={styleWrapper}
      >
        <div className={`${s.inputBlock_texInput} ${meta.error && meta.touched ? 'error' : null}`}>
          <label className={s.inputBlock_label} htmlFor={inputId}></label>
          <input
            id={inputId}
            type="file"
            placeholder={placeholder}
            // value={input.value}
            name={input.name}
            onChange={fileChange}
            onBlur={input.onBlur}
            style={styleInput}
            ref={fileInput}
          />
        </div>
      </ReduxFormInputWrapper>
    </div>
  );
};

export default ReduxFormFileInput;


ReduxFormFileInput.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
};
