import { SORT_OPTIONS } from "../Actions/actionGetSortOptions";
import {FETCHED_PROJECTS_DATA} from "../Actions/actionFetchProjectsData";

let InitialState = {
  categories: [
    { id: '', name: 'All projects'}
  ],
  benefits: [
    { id: '', name: 'All projects'}
  ],
  loading: false
};

const fetchedOptionsReducer = (state = InitialState, action) => {
  switch(action.type) {
    case FETCHED_PROJECTS_DATA.REQUEST_PROJECTS:
      debugger;
      return {
        ...state,
        loading: true
      };
    case SORT_OPTIONS.RECEIVE_CATEGORIES_OPTIONS:
    debugger;
      return {
        ...state,
        ...action.payload,
        categories: [...state.categories, ...action.payload.items],
        loading: false
      };
    case SORT_OPTIONS.RECEIVE_BENEFITS_OPTIONS:
    debugger;
      return {
        ...state,
        ...action.payload,
        benefits: [...state.benefits, action.payload.items],
        loading: false
      };
    default:
      return state;
  }
};

export default fetchedOptionsReducer;