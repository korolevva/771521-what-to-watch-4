import {ActionType} from "../const";
import {AuthorizationStatus} from "../reducers/user/user";
import history from "../history.js";
import {createUser} from "../adapter/adapter.js";
import {Operation as DataOperation} from "../actions/dataActions.js";

export const requireAuthorization = (status) => {
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  };
};

export const checkErrorAuthorization = (value) => {
  return {
    type: ActionType.CHECK_ERROR_AUTHORIZATION,
    payload: value
  };
};

export const getUserInfo = (userInfo) => {
  return {
    type: ActionType.GET_USER_INFO,
    payload: userInfo,
  };
};

export const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(checkErrorAuthorization(false));
        dispatch(getUserInfo(createUser(response.data)));
        dispatch(DataOperation.loadFavoriteMovies());
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
      .then((response) => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(getUserInfo(createUser(response.data)));
        history.goBack();
      })
      .catch((err) => {
        dispatch(checkErrorAuthorization(true));
        throw err;
      });
  },
};
