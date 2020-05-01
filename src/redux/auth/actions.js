export const SET_AUTH_CODE = "SET_AUTH_CODE";
export const GET_ACCESS_TOKEN = "GET_ACCESS_TOKEN";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_IS_AUTHORIZED = "SET_IS_AUTHORIZED";

export const setAuthCode = (code) => ({
  type: SET_AUTH_CODE,
  payload: { code },
});

export const getAccessToken = () => ({
  type: GET_ACCESS_TOKEN,
});

export const setAccessToken = (token) => ({
  type: SET_ACCESS_TOKEN,
  payload: { token },
});

export const setIsAuthorized = (isAuthorized) => ({
  type: SET_IS_AUTHORIZED,
  payload: { isAuthorized },
});
