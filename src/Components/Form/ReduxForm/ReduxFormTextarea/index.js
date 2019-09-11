import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.sass';
import '../../FormComponentsStyle.sass';
import ReduxFormInputWrapper from '../ReduxFormInputWrapper/InputWrapper';


const ReduxFormTextarea = (props) => {
  const {
    input,
    label,
    placeholder,
    meta,
    styleWrapper,
    styleTextarea,
    isRequired,
    styleLabel,
    maxLength,
  } = props;

  const inputId = `input-${input.name}`;

  return (
    <div className={s.textAreaBlock}>
      <ReduxFormInputWrapper
        label={label}
        error={meta.error}
        touched={meta.touched}
        inputId={inputId}
        isRequired={isRequired}
        style={styleWrapper}
        styleLabel={styleLabel}
      >
        <div className={s.textAreaBlock_texArea}>
          <textarea
            className={meta.error && meta.touched ? 'error' : null}
            id={inputId}
            placeholder={placeholder}
            value={input.value}
            name={input.name}
            onChange={input.onChange}
            onBlur={input.onBlur}
            style={styleTextarea}
            maxLength={maxLength}
          >
          </textarea>
          <div className="h6-skyFont fs-16 ls-27 fw-600 mt-2 t-align-r">{input.value.length}/{maxLength}</div>
        </div>
      </ReduxFormInputWrapper>
    </div>
  );
};

export default ReduxFormTextarea;


ReduxFormTextarea.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
};
