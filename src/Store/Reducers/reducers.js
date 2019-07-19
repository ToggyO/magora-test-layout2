import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import formSignUpReducer from './formSignUpReducer';

//при устройстве валидации я доработаю стейт формы



export const reducers = combineReducers({
  modalState: modalReducer,
  formState: formSignUpReducer
});

