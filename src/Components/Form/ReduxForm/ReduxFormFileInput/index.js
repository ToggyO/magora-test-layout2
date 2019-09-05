import React, { useState, useEffect } from 'react';
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
    loadImage,
    loadedImage,
    resourceId,
  } = props;

  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (loadedImage) {
      setAvatar(loadedImage);
    }
  }, [loadedImage]);

  const inputId = `input-${input.name}`;

  const fileInput = React.createRef();

  const fileChange = () => {
    const file = fileInput.current.files[0];
    if (!file) {
      return;
    }
    setAvatar(window.URL.createObjectURL(file));
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = () => {
      loadImage(fr.result);
    };
  };

  const clearInput = () => {
    fileInput.current.value = '';
    setAvatar(null);
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
        <div className={`${s.inputBlock_texInput} ${meta.error && meta.touched ? 'error' : ''}${avatar && s.file_input__small}`}>
          <label className={`${s.inputBlock_label} ${avatar && s.file_input__small}`} htmlFor={inputId}>
            { avatar !== null
              ? <div className={s.inputBlock_label__loadedImage}>
                  <div
                    style={{ backgroundImage: `url(${avatar})` }}
                    className={s.loadedImage}
                  >
                  </div>
                </div>
              : <div
                  className={s.inputBlock_label__placeholderImage}
                  style={{ backgroundImage: "url('/img/placeholder-image.jpg')" }}
                >
                </div>
            }
          </label>

          {avatar !== null && <div
            className={s.cross}
            onClick={clearInput}
          >
            <span>⮾</span>
          </div>}

          <input
            id={inputId}
            type="file"
            placeholder={placeholder}
            value={input.onChange(resourceId)}
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
  loadImage: PropTypes.func,
  resourceId: PropTypes.string,
};
