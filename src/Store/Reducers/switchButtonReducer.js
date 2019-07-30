import { SWITCH_BUTTON_ACTIONS } from '../Actions/actionSwitchButtons';

const initialState = {
  isAttended: false,
};



const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_BUTTON_ACTIONS.ATTEND_BUTTON:
      return {
        ...state,
        isAttended: !state.isAttended
      };

    default:
      return state;
  }
};


export default modalReducer;