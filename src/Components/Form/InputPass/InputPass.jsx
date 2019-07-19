import React from 'react';
import s from './InputPass.module.sass';
import '../FormComponentsStyle.sass';
import eye from '../../../img/main/hide-password.svg'

import InputWrapper from '../InputWrapper/InputWrapper';


class InputPass extends React.Component {

  state = {
    isPwShown: false
  };

  showHidePw = () => {
    this.setState({
      isPwShown: !(this.state.isPwShown)
    });
  };
  render() {

    const { style, label, placeholder, name, value, onChange, onBlur, error, visited } = this.props;
    const { isPwShown } = this.state;
    // debugger;
    return (
      <div className={s.inputPass} style={style}>
        <InputWrapper label={label} error={error} visited={visited}>
          <div className={`${s.container} ${ error && visited ? 'error' : null }`}>
            <input
              type={isPwShown ? 'text' : 'password'}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <button
              type='button'
              onClick={ this.showHidePw }
            >
              <img src={ eye }
                   alt=""/>
            </button>
          </div>
        </InputWrapper>
      </div>
    )
  }
}


export default InputPass;