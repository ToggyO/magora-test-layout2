import { combineReducers } from 'redux';
import modalReducer from './modal/modalReducer';
import fetchedDataReducer from './projectSearchPage/fetchDataReducer';
import fetchedOptionsReducer from './projectSearchPage/fetchOptionsReducer';
import fetchedGrantsDataReducer from './grantsPage/fetchGrantsDataReducer';


export const reducers = combineReducers({
  modalState: modalReducer,
  fetchedProjectsData: fetchedDataReducer,
  fetchedProjectsOptions: fetchedOptionsReducer,
  fetchedGrantsData: fetchedGrantsDataReducer,
});

