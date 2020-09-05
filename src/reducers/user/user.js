import {ActionType} from "../../const.js";

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isErrorAuth: false,
  userInfo: {
    id: 0,
    email: ``,
    name: ``,
    avatarUrl: ``,
  },
};

export const userReduser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.CHECK_ERROR_AUTHORIZATION:
      return Object.assign({}, state, {
        isErrorAuth: action.payload,
      });
    case ActionType.GET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
    default:
      return state;
  }
};

