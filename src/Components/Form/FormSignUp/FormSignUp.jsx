import React from 'react';
import '../FormStyle.sass';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TextInput from '../TextInput/TextInput';
import InputPass from "../InputPass/InputPass";

import { modalOpen } from "../../../Store/Actions/actionModal";



class FormSignUp extends React.Component {

  state = {
    values: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    formErrors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    visited: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      passwordConfirm: false
    },
    passwordValid: false,
    passwordConfirmValid: false,
    formValid: false,
  };

  componentDidMount() {
    this.initialValidation();
  };

  initialValidation = () => {
    let initValid = this.state.values;
    let keys = Object.keys(initValid);

    keys.forEach( (fieldName, i) => {
      let value = initValid[fieldName];
      this.validateField( fieldName, value );
    });
  };

  handleChange = (e) => {
    const {target: {name, value}} = e;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      },
    }, () => { this.initialValidation( name, value ) } );
    // debugger;
  };

  // this.validateField(name, value)
  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  validateField(fieldName, value) {
    //necessary to add Verification Code field
    let fieldValidationErrors = this.state.formErrors;
    // let emailValid = this.state.emailValid;
    // let nicknameValid = this.state.nicknameValid;
    let passwordValid = this.state.passwordValid;
    let passwordConfirmValid = this.state.passwordConfirmValid;

    switch(fieldName) {
      case 'firstName':
        const firstNameValid = value.length <= 20 && value.length >= 2;
        fieldValidationErrors.firstName = firstNameValid ? '' : 'between 2 and 20 symbols';
        break;
      case 'lastName':
        const lastNameValid = value.length <= 20 && value.length >= 2;
        fieldValidationErrors.lastName = lastNameValid ? '' : 'between 2 and 20 symbols';
        break;
      case 'email':
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : 'min 6' +
          ' symbols';
        passwordConfirmValid = value === this.state.values.passwordConfirm;
        fieldValidationErrors.passwordConfirm = passwordConfirmValid ? '' : 'passwords, you entered is not the same';
        break;
      case 'passwordConfirm':
        passwordConfirmValid = value === this.state.values.password;
        fieldValidationErrors.passwordConfirm = passwordConfirmValid ? '' : 'passwords, you entered is not the same';
        break;
      default:
        break;
    }

    let formValid = true;
    let keys = Object.keys(fieldValidationErrors);
    keys.forEach((fieldName, i) => {
      if (fieldValidationErrors[fieldName]) {
        formValid = false;
      }
    });

    this.setState({
      formErrors: fieldValidationErrors,
      formValid: formValid
    });
  }

  handleBlur = (e) => {
    const { target: {name} } = e;

    this.setState({
      visited: {
        ...this.state.visited,
        [name]: true,
      },
    });
  };

  render() {

    const formErrors = this.state.formErrors;
    const visited = this.state.visited;

    return (
      <div className="main-form">
        <div className="main-form__headline">
          <h2 className='h2-black fs-24 lh-30 ls-3 fw-700 mb-10'>
           Join the Tribus community
          </h2>
        </div>
        <form action="" className='form'>

            <TextInput
              placeholder={'First name'}
              name={'firstName'}
              label={''}
              type={'text'}
              state={this.state.values.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={formErrors.firstName}
              visited={visited.firstName}
            />

            <TextInput
              placeholder={'Last name'}
              name={'lastName'}
              label={''}
              type={'text'}
              state={this.state.values.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={formErrors.lastName}
              visited={visited.lastName}
            />

            <TextInput
              placeholder={'Email'}
              name={'email'}
              type={'email'}
              label={'Contact information:'}
              state={this.state.values.email}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={formErrors.email}
              visited={visited.email}
            />

          <div className='form-password'>
            <div className='form-password__block' id="form-password__block">

                <InputPass
                  placeholder={'Enter password'}
                  name={'password'}
                  label={'Password:'}
                  state={this.state.values.password}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  error={formErrors.password}
                  visited={visited.password}
                />

                <InputPass
                  placeholder={'Confirm password'}
                  name={'passwordConfirm'}
                  label="&nbsp;"
                  state={this.state.values.passwordConfirm}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  error={formErrors.passwordConfirm}
                  visited={visited.passwordConfirm}
                />

            </div>
          </div>

          <p className='form-license'>
            Any personal information you provide will be dealt with in accordance with
            our
            <a href="./#">
              Privacy Collection Statement
            </a>
            . By Creating an account you agree to our
            <a href="./#">
              Terms and Conditions.
            </a>
          </p>

          <div className='fBtn-adapt form-button__create'>
            <button
              type='submit'
              className='btn green sm-wide fs-16 lh-22 ls-24 fw-700'
              onClick={ this.onSubmitHandler }
              disabled={!this.state.formValid}
            >
              Create
            </button>
          </div>

          <div className='fBtn-adapt form-button__login'>
            <button
              type='button'
              className='btn transparent sm-wide fs-16 lh-17 ls-24 fw-600'
              onClick={ () => this.props.modalOpen('signInModal') }
            >
              Log in
            </button>
          </div>

        </form>
      </div>
    );
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    modalOpen: bindActionCreators(modalOpen, dispatch),
  }
};

export default connect( null, mapDispatchToProps )(FormSignUp);

