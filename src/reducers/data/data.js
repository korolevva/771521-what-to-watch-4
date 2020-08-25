import {ActionType} from "../../const.js";

const initialState = {
  movieCard: {},
  moviesCards: [],
  reviews: [],
  isDataSending: false,
  isErrorLoading: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIE:
      return Object.assign({}, state, {
        movieCard: action.payload,
      });
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {
        moviesCards: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    case ActionType.CHECK_IS_DATA_SENDING:
      return Object.assign({}, state, {
        isDataSending: action.payload,
      });
    case ActionType.CHECK_IS_ERROR_LOADING:
      return Object.assign({}, state, {
        isErrorLoading: action.payload,
      });
    default:
      return state;
  }
};
