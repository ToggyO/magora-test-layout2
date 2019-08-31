
export default function validationConditionsSignUp(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (!values.firstName.match(/[A-Za-z0-9]/)) {
    errors.firstName = 'Accepts only english characters';
  } else if (values.firstName.length < 2 || values.firstName.length > 20) {
    errors.firstName = 'between 2 and 20 symbols';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (!values.lastName.match(/[A-Za-z0-9]/)) {
    errors.lastName = 'Accepts only english characters';
  } else if (values.lastName.length < 2 || values.lastName.length > 20) {
    errors.lastName = 'between 2 and 20 symbols';
  }

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

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Required';
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'passwords, you entered is not the same';
  }

  if (values.role === 'COMMUNITY_GROUP') {
    if (!values.communityName) {
      errors.communityName = 'Required';
    } else if (values.communityName.length < 6) {
      errors.communityName = 'min 6 symbols';
    }
  }

  return errors;
}
