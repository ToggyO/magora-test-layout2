import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import fetchedDataReducer from './fetchDataReducer';
import fetchedOptionsReducer from "./fetchOptionsReducer";
//при устройстве валидации я доработаю стейт формы


export const reducers = combineReducers({
  modalState: modalReducer,
  fetchedProjectsData: fetchedDataReducer,
  fetchedOptions: fetchedOptionsReducer,
});

