import React from 'react';
import '../FormStyle.sass';
import TextInput from '../TextInput/TextInput';
import InputPass from "../InputPass/InputPass";
import formInitialize from '../../../Libs/FormValidation';
import { connect } from "react-redux";
import { modalOpen } from "../../../Store/Actions/modal/actionModal";
import { bindActionCreators } from "redux";
import validationConditionsSignIn from "./ValidationConditionsSignIn";


class FormSignIn extends React.Component {
  constructor(props) {
    super(props);

    formInitialize.call(this, [
      { fieldName:'firstName', initValue: ''},
      { fieldName:'lastName', initValue: ''},
      { fieldName:'password', initValue: ''},

    ], validationConditionsSignIn);

  };

  state = {};

  componentDidMount() {
    console.log(this.state);
  };

  render() {

    const formErrors = this.state.formErrors;
    const visited = this.state.visited;

    return (
      <div className="main-form">
        <div className="main-form__headline">
          <h2 className='h2-black fs-24 lh-30 ls-3 fw-700 mb-10 t-align-c'>
            Sign in to share ideas and support others
          </h2>
        </div>
        <form action="" className='form'>

          <TextInput
            placeholder={'First name'}
            name={'firstName'}
            state={this.state.values.firstName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={formErrors.firstName}
            visited={visited.firstName}
          />

          <TextInput
            placeholder={'Last name'}
            name={'lastName'} state={this.state.values.lastName}
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

          <p className='form-license t-align-c'>
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
              onClick={ () => this.props.modalOpen('signUpModal', { aaa: 'aaa' })}
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

//the same as line 144-148
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