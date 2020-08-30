import {ActionType} from "../const";
import {AuthorizationStatus} from "../reducers/user/user";
import history from "../history.js";

export const requireAuthorization = (status) => {
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  };
};

export const renderSingInPage = () => {
  return {
    type: ActionType.RENDER_SIGN_IN_PAGE,
    payload: true,
  };
};

export const renderMainPage = () => {
  return {
    type: ActionType.RENDER_MAIN_PAGE,
    payload: false,
  };
};

export const checkErrorAuthorization = (value) => {
  return {
    type: ActionType.CHECK_ERROR_AUTHORIZATION,
    payload: value
  };
};

export const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(checkErrorAuthorization(false));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(renderMainPage());
        history.goBack();
      })
      .catch((err) => {
        dispatch(checkErrorAuthorization(true));
        throw err;
      });
  },
};
