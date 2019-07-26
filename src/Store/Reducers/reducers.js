import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
//при устройстве валидации я доработаю стейт формы


export const reducers = combineReducers({
  modalState: modalReducer,
});

