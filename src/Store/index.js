/* eslint-disable */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducers } from './Reducers/reducers';
// import { logger } from 'redux-logger';


const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);


export default store;