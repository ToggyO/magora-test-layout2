import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../FormStyle.sass';
import { Field, reduxForm } from 'redux-form';
import ReduxFormTextInput from '../ReduxFormTextInput';
import ReduxFormPassword from '../ReduxFormPassword';
import validationConditionsSignIn from './AuthValidation';
import { modalOpen } from '../../../../Store/Actions/modal/actionModal';
import { authRequest } from '../../../../Store/Actions/Auth/actionAuth';
import Preloader from '../../../Preloader/Preloader';


let AuthForm = props => {
  const {
    handleSubmit,
    pristine,
    valid,
    authorizationRequest,
    error,
    authData,
  } = props;

  return <div className="main-form">

  {authData.authLoader
    && <Preloader
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
  }

    <div className="main-form__headline">
      <h2 className="h2-black fs-24 lh-30 ls-3 fw-700 mb-10 t-align-c">
        Sign in to share ideas and support others
      </h2>
    </div>
    <form
      onSubmit={handleSubmit(authorizationRequest)}
      className="form"
    >

      { error && <div style={{
        fontSize: '15px',
        lineHeight: '16px',
        letterSpacing: '0.04px',
        fontWeight: 500,
        color: 'red',
        textAlign: 'center',
      }}
      >
        {error}
      </div>}

      <Field
        placeholder="Email"
        name="email"
        type="email"
        label="Email:"
        component={ReduxFormTextInput}
      />

      <div className="form-password">
        <div className="form-password__block" id="form-password__block">

          <Field
            placeholder="Enter password"
            name="password"
            type="password"
            label="Password:"
            component={ReduxFormPassword}
            style={{ width: '100%' }}
          />

        </div>
        <a href="./#" style={ { width: '100%' } }>
          Forgot Password
        </a>
      </div>

      <p className="form-license t-align-c">
        Business or local council?
        <a href="./#">
          Click here.
        </a>
      </p>

      <div className="fBtn-adapt form-button__create">
        <button
          type="submit"
          className="btn green sm-wide fs-16 lh-22 ls-24 fw-700 sh-btn-lg"
          disabled={pristine || !valid}
        >
          Login in
        </button>
      </div>

      <div className="fBtn-adapt form-button__login">
        <button
          type="button"
          className="btn transparent sm-wide fs-16 lh-17 ls-24 fw-600"
          onClick={ () => props.modalOpen('signUpModal') }
        >
          Create account
        </button>
      </div>

    </form>
  </div>;
};

AuthForm = reduxForm({
  form: 'authorization',
  validate: validationConditionsSignIn,
})(AuthForm);

const mapStateToProps = ({ authData }) => ({ authData });
const mapDispatchToProps = (dispatch) => ({
  modalOpen: bindActionCreators(modalOpen, dispatch),
  authorizationRequest: bindActionCreators(authRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);


AuthForm.propTypes = {
  authorizationRequest: PropTypes.func,
  error: PropTypes.object,
  authData: PropTypes.object,
};
