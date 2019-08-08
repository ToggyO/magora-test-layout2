import { FETCHED_GRANTS_DATA } from '../../Actions/grantsPage/actionFetchGrantsData';

let InitialState = {
  items: [],
  isGrantsData: false,
  errors: {},
  loading: false,
  totalCardsCount: 0,
  currentPage: 1,
  history: {
    sort: '',
    category: '',
    benefits: '',
    creator: '',
  }
};


const fetchedGrantsDataReducer = (state = InitialState, action) => {
  switch(action.type) {
    case FETCHED_GRANTS_DATA.RECEIVE_GRANTS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        totalCardsCount: action.payload.total,
        currentPage: action.payload.page,
        isGrantsData: true,
      };
    case FETCHED_GRANTS_DATA.GRANTS_SORT_VALUES:
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

export default fetchedGrantsDataReducer;
