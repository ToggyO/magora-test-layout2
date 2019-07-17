import { FORM_ACTIONS } from '../Actions/actionForm';

const initialState = {
  isReg: false
};


const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_ACTIONS.SIGN_IN_FORM:
      return {
        ...state,
        isReg: false
      };
    case FORM_ACTIONS.REG_FORM:
      return {
        ...state,
        isReg: true
      };
    default:
      return state;
  }
};


export default formReducer;