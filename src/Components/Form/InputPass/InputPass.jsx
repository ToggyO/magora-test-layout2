import React from 'react';
import s from './InputPass.module.sass';
import '../FormComponentsStyle.sass';
import eye from '../../../img/main/hide-password.svg'
import FormError from "../FormError/FormError";


class InputPass extends React.Component {

  state = {
    isPwShown: false
  };

  //Показать/Скрыть пароль/подтверждение
  showHidePw = () => {
    this.setState({
      isPwShown: !(this.state.isPwShown)
    });
  };
  render() {

    const { style, label, placeholder, name, value, onChange, onBlur, error, visited } = this.props;
    const { isPwShown } = this.state;

    return (
      <div className={s.inputPass} style={style}>
        <label htmlFor="form-password__block">
          {label}
        </label>
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
        <FormError
          error={error}
          visited={visited}
        />
      </div>
    )
  }
}


export default InputPass;