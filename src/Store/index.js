import {applyMiddleware, createStore} from "redux";
import { reducers } from './Reducers/reducers';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunkMiddleware)),
);


export default store;