import {createStore} from "redux";
import { reducers } from './Reducers/reducers';


let store = createStore(reducers);

//  (^_^)
window.store = store;

export default store;