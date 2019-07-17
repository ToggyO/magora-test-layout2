import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import formReducer from './formReducer';
//при устройстве валидации я доработаю стейт формы



export const reducers = combineReducers({
  modalState: modalReducer,
  regState: formReducer

});

