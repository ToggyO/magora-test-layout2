import { FORM_ACTIONS } from '../Actions/actionForm';

const initialState = {
  isReg: false,
  // options: {},
};


const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_ACTIONS.SIGN_IN_FORM:
      return {
        ...state,
        isReg: true,
        // options: action.payload.options,
      };
    case FORM_ACTIONS.REG_FORM:
      return {
        ...state,
        isReg: false,
        // options: {},
      };
    default:
      return state;
  }
};


export default formReducer;