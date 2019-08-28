import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.sass';
import '../../FormComponentsStyle.sass';
import eye from '../../../../img/main/hide-password.svg';
import ReduxFormInputWrapper from '../ReduxFormInputWrapper/InputWrapper';


class ReduxFormPassword extends React.Component {
  state = {
    isPwShown: false,
  };

  showHidePw = () => {
    this.setState({
      isPwShown: !this.state.isPwShown,
    });
  };

  render() {
    const {
      input,
      style,
      label,
      placeholder,
      meta,
    } = this.props;

    const inputId = `input-${input.name}`;
    const { isPwShown } = this.state;

    return (
      <div className={s.inputPass} style={style}>
        <ReduxFormInputWrapper
          label={label}
          error={meta.error}
          touched={meta.touched}
          inputId={inputId}>
          <div className={`${s.container} ${meta.error && meta.touched ? 'error' : null}`}>
            <input
              id={this.inputId}
              type={isPwShown ? 'text' : 'password'}
              placeholder={placeholder}
              value={input.value}
              name={input.name}
              onChange={input.onChange}
              onBlur={input.onBlur}
            />
            <button
              type='button'
              onClick={ this.showHidePw }
            >
              <img src={ eye }
                   alt=""/>
            </button>
          </div>
        </ReduxFormInputWrapper>
      </div>
    );
  }
}


export default ReduxFormPassword;


ReduxFormPassword.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  style: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
};
