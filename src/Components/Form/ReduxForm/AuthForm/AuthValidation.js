
export default function validationConditionsSignIn(values) {

  let errors = {};

  if(!values.email) {
    errors.email = 'Required'
  } else if (!values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    errors.email = 'is invalid'
  }

  if(!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'min 6 symbols'
  }

  return  errors;
};



// export function login(data) {
//   return dispatch => {
//     dispatch({ type: LOGIN_REQUEST })
//
//     // request в данном случае - https://github.com/KyleAMathews/superagent-bluebird-promise
//     return request.post(`${API_ROOT_V1}/auth/signin`)
//       .send(data)
//       .then(res => {
//         if (!res.ok) {
//           dispatch({ type: LOGIN_FAILURE })
//         } else {
//           dispatch({
//             type: LOGIN_SUCCESS,
//             data: res.body.data,
//           })
//           //сохранение токена в localStorage
//           localStorage.setItem('cks_token', res.body.data)
//         }
//       }, err => {
//         dispatch({ type: LOGIN_FAILURE })
//       })
//   }
// }




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
