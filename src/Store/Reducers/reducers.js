import { combineReducers } from 'redux';
import modalReducer from './modalReducer';




export const reducers = combineReducers({
  modalState: modalReducer
});

