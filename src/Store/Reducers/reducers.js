import { combineReducers } from 'redux';
import modalReducer from './modal/modalReducer';
import fetchedDataReducer from './projectSearchPage/fetchDataReducer';
import fetchedOptionsReducer from "./projectSearchPage/fetchOptionsReducer";
//при устройстве валидации я доработаю стейт формы


export const reducers = combineReducers({
  modalState: modalReducer,
  fetchedProjectsData: fetchedDataReducer,
  fetchedOptions: fetchedOptionsReducer,
});

