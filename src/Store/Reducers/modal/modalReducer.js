import { MODAL_ACTIONS } from '../../Actions/modal/actionModal';

const initialState = {
  modalKey: '',
  options: {},
};


const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTIONS.OPEN_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    case MODAL_ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        modalKey: '',
        option: {},
      };
    default:
      return state;
  }
};


export default modalReducer;
