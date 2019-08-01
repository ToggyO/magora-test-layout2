import { FETCHED_PROJECTS_DATA } from '../Actions/actionFetchProjectsData';

let InitialState = {
  items: [],
  errors: {},
  loading: false,
  pageSize: 9,
  totalCardsCount: 0,
  currentPage: 1,
};


const fetchedDataReducer = (state = InitialState, action) => {
  switch(action.type) {
    case FETCHED_PROJECTS_DATA.REQUEST_PROJECTS:
      return {
        ...state,
        loading: true
      };
    case FETCHED_PROJECTS_DATA.RECEIVE_PROJECTS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        totalCardsCount: action.payload.total,
        currentPage: action.payload.page,
      };
    default:
      return state;
  }
};

export default fetchedDataReducer;
