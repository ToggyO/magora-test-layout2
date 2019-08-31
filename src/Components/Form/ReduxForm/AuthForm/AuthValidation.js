
export default function validationConditionsSignIn(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    errors.email = 'is invalid';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'min 6 symbols';
  }

  return errors;
}
