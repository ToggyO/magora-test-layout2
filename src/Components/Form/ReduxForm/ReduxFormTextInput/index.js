import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.sass';
import '../../FormComponentsStyle.sass';
import ReduxFormInputWrapper from '../ReduxFormInputWrapper/InputWrapper';


const ReduxFormTextInput = (props) => {
  const {
    input,
    label,
    type,
    placeholder,
    meta,
    styleWrapper,
    styleInput,
    isRequired,
    styleLabel,
  } = props;

  const inputId = `input-${input.name}`;

  return (
    <div className={s.inputBlock}>
      <ReduxFormInputWrapper
        label={label}
        error={meta.error}
        touched={meta.touched}
        inputId={inputId}
        isRequired={isRequired}
        style={styleWrapper}
        styleLabel={styleLabel}
      >
        <div className={s.inputBlock_texInput}>
          <input
            className={meta.error && meta.touched ? 'error' : null}
            id={inputId}
            type={type}
            placeholder={placeholder}
            value={input.value}
            name={input.name}
            onChange={input.onChange}
            onBlur={input.onBlur}
            style={styleInput}
          />
        </div>
      </ReduxFormInputWrapper>
    </div>
  );
};

export default ReduxFormTextInput;


ReduxFormTextInput.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
};
