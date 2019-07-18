export const FORM_ACTIONS = {
  SIGN_IN_FORM: 'SIGN_IN_FORM',
  REG_FORM: 'REG_FORM'
};

export const signInForm = () => {
  return {
    type: FORM_ACTIONS.SIGN_IN_FORM,
    // payload: {
    //   formKey: formKey,
    //   options: options
    // },
  };
};

export const regForm = () => {
  return {
    type: FORM_ACTIONS.REG_FORM
  };
};

