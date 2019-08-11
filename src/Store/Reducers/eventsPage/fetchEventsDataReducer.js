import {FETCHED_EVENTS_DATA} from "../../Actions/eventsPage/actionFetchEventsData";


let InitialState = {
  items: [],
  isEventsData: false,
  errors: {},
  loading: false,
  totalCardsCount: 0,
  currentPage: 1,
  history: {
    sort: '',
    category: '',
    benefits: '',
    eventType: '',
    startDate: '',
    endDate: '',
  }
};


const fetchedEventsDataReducer = (state = InitialState, action) => {
  switch(action.type) {
    case FETCHED_EVENTS_DATA.REQUEST_EVENTS:
      return {
        ...state,
        loading: true
      };
    case FETCHED_EVENTS_DATA.RECEIVE_EVENTS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        totalCardsCount: action.payload.total,
        currentPage: action.payload.page,
        isEventsData: true,
      };
    case FETCHED_EVENTS_DATA.EVENTS_SORT_VALUES:
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

export default fetchedEventsDataReducer;
