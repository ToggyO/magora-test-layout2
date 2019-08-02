import { FETCHED_PROJECTS_DATA } from '../Actions/actionFetchProjectsData';

let InitialState = {
  items: [],
  errors: {},
  loading: false,
  totalCardsCount: 0,
  history: {
    pageSize: 9,
    currentPage: 1,
    sort: '',
    category: '',
    benefit: '',
  }
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
    case FETCHED_PROJECTS_DATA.PROJECT_SORT_VALUES:
      return {
        ...state,
        history: {
          ...state.history,
          [action.payload.name]: action.payload.value
        }
      };
    default:
      return state;
  }
};

export default fetchedDataReducer;
