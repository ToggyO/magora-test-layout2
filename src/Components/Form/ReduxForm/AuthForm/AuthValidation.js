
export default function validationConditionsSignIn(values) {

  let errors = {};

  if(!values.firstName) {
    errors.firstName = 'Required'
  } else if (!values.firstName.match(/[A-Za-z0-9]/)) {
    errors.firstName = 'Accepts only english characters';
  } else if (values.firstName.length < 2 || values.firstName.length > 20) {
    errors.firstName = 'between 2 and 20 symbols'
  }

  if(!values.lastName) {
    errors.lastName = 'Required'
  } else if (!values.lastName.match(/[A-Za-z0-9]/)) {
    errors.lastName = 'Accepts only english characters';
  } else if (values.lastName.length < 2 || values.lastName.length > 20) {
    errors.lastName = 'between 2 and 20 symbols'
  }

  if(!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'min 6 symbols'
  }

  return  errors;
};








// export default function validationConditionsSignUp(fieldName, value) {
//   let fieldValidationErrors = this.state.formErrors;
//   let passwordConfirmValid;
//
//   switch(fieldName) {
//     case 'firstName':
//       let firstNameValid = value.length <= 20 && value.length >= 2;
//       fieldValidationErrors.firstName = firstNameValid ? '' : 'between 2 and 20 symbols';
//       break;
//     case 'lastName':
//       let lastNameValid = value.length <= 20 && value.length >= 2;
//       fieldValidationErrors.lastName = lastNameValid ? '' : 'between 2 and 20 symbols';
//       break;
//     case 'email':
//       let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//       fieldValidationErrors.email = emailValid ? '' : 'is invalid';
//       break;
//     case 'password':
//       let passwordValid = value.length >= 6;
//       fieldValidationErrors.password = passwordValid ? '' : 'min 6' +
//         ' symbols';
//       if (this.state.formErrors.passwordConfirm !== undefined) {
//         passwordConfirmValid =value === this.state.values.passwordConfirm;
//         fieldValidationErrors.passwordConfirm = passwordConfirmValid ? '' : 'passwords, you entered is not the same';
//       }
//       break;
//     case 'passwordConfirm':
//       passwordConfirmValid = value === this.state.values.password;
//       fieldValidationErrors.passwordConfirm = passwordConfirmValid ? '' : 'passwords, you entered is not the same';
//       break;
//     case 'verCode':
//       if (this.state.values.role === 'admin') {
//         const verCodeValid = value.length >= 6;
//         fieldValidationErrors.verCode = verCodeValid ? '' : 'min 6' +
//           ' symbols';
//       } else {
//         fieldValidationErrors.verCode = '';
//       }
//       break;
//     default:
//       break;
//   }
//
//   return  fieldValidationErrors
// };
