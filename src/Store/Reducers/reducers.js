import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import fetchDataReducer from './fetchDataReducer';
import switchButtonReducer from "./switchButtonReducer";
//при устройстве валидации я доработаю стейт формы


export const reducers = combineReducers({

  modalState: modalReducer,
  fetchedData: fetchDataReducer,
  switchButtonState: switchButtonReducer,
});

