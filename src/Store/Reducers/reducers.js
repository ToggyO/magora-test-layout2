import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import switchButtonReducer from "./switchButtonReducer";
//при устройстве валидации я доработаю стейт формы


export const reducers = combineReducers({
  modalState: modalReducer,
  switchButtonState: switchButtonReducer,
});

