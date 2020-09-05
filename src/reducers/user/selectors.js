import NameSpace from "../name-space.js";

export const getAuthorizationStatus = (store) => {
  return store[NameSpace.USER].authorizationStatus;
};

export const getIsSingInSelected = (store) => {
  return store[NameSpace.USER].isSingInSelected;
};

export const getIsErrorAuth = (store) => {
  return store[NameSpace.USER].isErrorAuth;
};

export const getUserInfo = (state) => {
  return state[NameSpace.USER].userInfo;
};
