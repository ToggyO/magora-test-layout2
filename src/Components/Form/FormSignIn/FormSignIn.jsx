import React from 'react';
import '../FormStyle.sass';
import TextInput from '../TextInput/TextInput';
import InputPass from "../InputPass/InputPass";
import { connect } from "react-redux";
import { modalOpen } from "../../../Store/Actions/actionModal";
import { bindActionCreators } from "redux";


class FormSignIn extends React.Component {

  state = {
    values: {
      firstName: '',
      lastName: '',
      password: '',
    },
    formErrors: {
      firstName: '',
      lastName: '',
      password: '',
    },
    visited: {
      firstName: false,
      lastName: false,
      password: false,
    },
    passwordValid: false,
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

  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let passwordValid = this.state.passwordValid;


    switch(fieldName) {
      case 'firstName':
        const firstNameValid = value.length <= 20 && value.length >= 2;
        fieldValidationErrors.firstName = firstNameValid ? '' : 'between 2 and 20 symbols';
        break;
      case 'lastName':
        const lastNameValid = value.length <= 20 && value.length >= 2;
        fieldValidationErrors.lastName = lastNameValid ? '' : 'between 2 and 20 symbols';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : 'min 6' +
          ' symbols';
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

          <div className='form-password'>
            <div className='form-password__block' id="form-password__block">

              <InputPass
                style={{ width: '100%'}}
                placeholder={'Enter password'}
                name={'password'}
                label={'Password:'}
                state={this.state.values.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                error={formErrors.password}
                visited={visited.password}
              />

            </div>
            <a href="./#" style={ { width: '100%' } }>
              Forgot Password
            </a>
          </div>

          <p className='form-license'>
            Business or local council?
            <a href="./#">
              Click here.
            </a>
          </p>

          <div className='fBtn-adapt form-button__create'>
            <button
              type='submit'
              className='btn green sm-wide fs-16 lh-22 ls-24 fw-700'
              onClick={ this.onSubmitHandler }
              disabled={!this.state.formValid}
            >
              Log in
            </button>
          </div>

          <div className='fBtn-adapt form-button__login' >
            <button
              type='button'
              className='btn transparent sm-wide fs-16 lh-17 ls-24 fw-600'
              onClick={ () => this.props.modalOpen('signUnModal', { aaa: 'aaa' }) }
            >
              Create account
            </button>
          </div>

        </form>
      </div>
    );
  };
};

let mapStateToProps = ({ formState, modalState }) => ( { formState, modalState} );

let mapDispatchToProps = (dispatch) => {
  return {
    modalOpen: bindActionCreators(modalOpen, dispatch)
  }
};
//
// let mapDispatchToProps = (dispatch) => {
//   return {
//     // modalOpen: function () { dispatch(modalOpen.apply(this, arguments)); }
//     modalOpen: bindActionCreators2(ModalActions, dispatch),
//   }
// };

export default connect( mapStateToProps, mapDispatchToProps )(FormSignIn)



//feature
// function bindActionCreators2(bindedFunction, dispatch) {
//
//   console.log(bindedFunction);
//
//   return function () {
//     dispatch(bindedFunction.apply(this, arguments));
//   }
// }