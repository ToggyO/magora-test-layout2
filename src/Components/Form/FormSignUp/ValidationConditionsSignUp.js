
export default function validationConditionsSignUp(value) {

  let fieldValidationErrors = {};

  if (value.firstName.length < 2 || value.firstName.length > 20) {
    fieldValidationErrors.firstName = 'between 2 and 20 symbols'
  }

  if (value.lastName.length < 2 || value.lastName.length > 20) {
    fieldValidationErrors.lastName = 'between 2 and 20 symbols'
  }

  if (!value.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    fieldValidationErrors.email = 'is invalid'
  }

  if (value.password.length < 6) {
    fieldValidationErrors.password = 'min 6 symbols'
  }

  if (value.password !== value.passwordConfirm) {
    fieldValidationErrors.passwordConfirm = 'passwords, you entered is not the same'
  }

  if (this.state.values.role === 'council') {
    if (value.verCode.length < 6) {
      fieldValidationErrors.verCode = 'min 6 symbols'
    }
  }

  return  fieldValidationErrors
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
