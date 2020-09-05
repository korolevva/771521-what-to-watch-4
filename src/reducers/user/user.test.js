import {userReduser, AuthorizationStatus} from "./user.js";
import {ActionType} from "../../const.js";
import {requireAuthorization, checkErrorAuthorization} from "../../actions/userActions.js";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(userReduser(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isErrorAuth: false,
    userInfo: {
      id: 0,
      email: ``,
      name: ``,
      avatarUrl: ``,
    }
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(userReduser({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isErrorAuth: false,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    isErrorAuth: false,
  });

  expect(userReduser({
    authorizationStatus: AuthorizationStatus.AUTH,
    isSingInSelected: false,
    isErrorAuth: false,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSingInSelected: false,
    isErrorAuth: false,
  });

  expect(userReduser({
    authorizationStatus: AuthorizationStatus.AUTH,
    isSingInSelected: false,
    isErrorAuth: false,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    isSingInSelected: false,
    isErrorAuth: false,
  });

  expect(userReduser({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSingInSelected: false,
    isErrorAuth: false,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSingInSelected: false,
    isErrorAuth: false,
  });
});

it(`Reducer should change isErrorAuth by a given value`, () => {
  expect(userReduser({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isErrorAuth: false,
  }, {
    type: ActionType.CHECK_ERROR_AUTHORIZATION,
    payload: true,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isErrorAuth: true,
  });

  expect(userReduser({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isErrorAuth: true,
  }, {
    type: ActionType.CHECK_ERROR_AUTHORIZATION,
    payload: false,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isErrorAuth: false,
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });

    expect(checkErrorAuthorization(true)).toEqual({
      type: ActionType.CHECK_ERROR_AUTHORIZATION,
      payload: true,
    });

    expect(checkErrorAuthorization(false)).toEqual({
      type: ActionType.CHECK_ERROR_AUTHORIZATION,
      payload: false,
    });
  });
});
