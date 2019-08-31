import { FETCHED_PROJECTS_DATA } from '../../Actions/fetchedData/actionFetchProjectsData';


const InitialState = {
  items: [],
  isData: false,
  errors: {},
  loading: false,
  totalCardsCount: 0,
  // currentPage: 1,
  history: {
    page: 1,
    sort: null,
    category: null,
    benefit: null,
    creator: null,
    type: null,
    startDate: null,
    endDate: null,
    crowdfunding: false,
    volunteering: false,
    petition: false,
  },
};


const fetchedDataReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCHED_PROJECTS_DATA.REQUEST_PROJECTS:
      return {
        ...state,
        loading: true,
      };
    case FETCHED_PROJECTS_DATA.RECEIVE_PROJECTS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        totalCardsCount: action.payload.total,
        isData: true,
        history: {
          ...state.history,
          page: action.payload.page,
        },
      };
    case FETCHED_PROJECTS_DATA.PROJECT_SORT_VALUES:
      return {
        ...state,
        history: {
          ...state.history,
          [action.payload.name]: action.payload.value,
        },
      };
    case FETCHED_PROJECTS_DATA.PROJECT_SORT_CHECKBOX_VALUES:
      return {
        ...state,
        history: {
          ...state.history,
          [action.payload.name]: !action.payload.value,
        },
      };
    case FETCHED_PROJECTS_DATA.DATA_CLEANING:
      return {
        ...InitialState,
      };
    case FETCHED_PROJECTS_DATA.DATE_PICK:
      return {
        ...state,
        history: {
          ...state.history,
          [action.payload.name]: action.payload.date,
        },
      };
    default:
      return state;
  }
};

export default fetchedDataReducer;
