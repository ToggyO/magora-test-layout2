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
      isPwShown: !this.state.isPwShown
    });
  };

  inputId = `input-${this.props.name}`;


  render() {

    const { style, label, placeholder, name, onChange, onBlur, error, visited, value } = this.props;
    const { isPwShown } = this.state;

    return (
      <div className={s.inputPass} style={style}>
        <InputWrapper label={label} error={error} visited={visited} inputId={this.inputId}>
          <div className={`${s.container} ${ error && visited ? 'error' : null }`}>
            <input
              id={this.inputId}
              type={isPwShown ? 'text' : 'password'}
              placeholder={placeholder}
              value={value}
              name={name}
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