import React from 'react';
import '../FormStyle.sass';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TextInput from '../TextInput/TextInput';
import InputPass from "../InputPass/InputPass";
import Select from "../Select/Select";
import formInitialize from '../../../Libs/FormValidation';
import validationConditionsSignUp from './ValidationConditionsSignUp';

import { modalOpen } from "../../../Store/Actions/projectSearchPage/actionModal";


let options = [
  {
    title: 'Individual',
    value: 'individual'
  },
  {
    title: 'Council',
    value: 'council'
  }
];


class FormSignUp extends React.Component {
  constructor(props) {
    super(props);

    formInitialize.call(this, [
      { fieldName:'firstName', initValue: ''},
      { fieldName:'lastName', initValue: ''},
      { fieldName:'email', initValue: ''},
      { fieldName:'password', initValue: ''},
      { fieldName:'passwordConfirm', initValue: ''},
      { fieldName:'verCode', initValue: ''},
      { fieldName: 'role', initValue: 'individual'}
    ], validationConditionsSignUp);
  };

  state = {

  };

  componentDidMount() {
    console.log(this.state);
  };

  render() {
    const opt = options;

    return (
      <div className="main-form">
        <div className="main-form__headline">
          <h2 className='h2-black fs-24 lh-30 ls-3 fw-700 mb-10 t-align-c'>
           Join the Tribus community
          </h2>
        </div>
        <form action="" className='form'>

          <div className='form-switchRole'>
            <Select
              name={'role'}
              label={''}

              onChange={this.handleChange}
              option={opt}
            />
            {this.state.values.role === 'council' &&
            <TextInput
              placeholder={'Ver code'}
              label={''}
              type={'text'}
              {...this.passAdditionalProps('verCode')}
              style={{marginTop: '-10px'}}
            />
            }
          </div>

          <TextInput
            placeholder={'First name'}
            label={''}
            type={'text'}
            {...this.passAdditionalProps('firstName')}
          />

          <TextInput
            placeholder={'Last name'}
            label={''}
            type={'text'}
            {...this.passAdditionalProps('lastName')}
          />

          <TextInput
            placeholder={'Email'}
            type={'email'}
            label={'Contact information:'}
            {...this.passAdditionalProps('email')}
          />

          <div className='form-password'>
            <div className='form-password__block' id="form-password__block">

                <InputPass
                  placeholder={'Enter password'}
                  label={'Password:'}
                  {...this.passAdditionalProps('password')}
                />

                <InputPass
                  placeholder={'Confirm password'}
                  label="&nbsp;"
                  {...this.passAdditionalProps('passwordConfirm')}
                />

            </div>
          </div>

          <p className='form-license t-align-c'>
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
              onClick={this.onSubmitHandler }
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

