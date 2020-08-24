import {ActionType} from "../../const.js";

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isSingInSelected: false,
  isErrorAuth: false,
};

export const userReduser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.RENDER_SIGN_IN_PAGE:
      return Object.assign({}, state, {
        isSingInSelected: action.payload,
      });
    case ActionType.RENDER_MAIN_PAGE:
      return Object.assign({}, state, {
        isSingInSelected: action.payload,
      });
    case ActionType.CHECK_ERROR_AUTHORIZATION:
      return Object.assign({}, state, {
        isErrorAuth: action.payload,
      });
    default:
      return state;
  }
};

