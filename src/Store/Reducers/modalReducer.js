import { MODAL_ACTIONS } from '../Actions/actionModal';

const initialState = {
  isOpen: false
};


const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTIONS.OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      };
    case MODAL_ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};


export default modalReducer;