import {
  SET_AUTH_CODE,
  SET_ACCESS_TOKEN,
  SET_IS_AUTHORIZED,
  SET_FETCH_STATUS,
} from "./actions";

const defaultState = {
  isAuthorized: false,
  status: "",
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTH_CODE: {
      const { code } = action.payload;
      return {
        ...state,
        code,
      };
    }
    case SET_ACCESS_TOKEN: {
      const { token } = action.payload;
      return {
        ...state,
        token,
        isAuthorized: true,
      };
    }
    case SET_IS_AUTHORIZED: {
      const { isAuthorized } = action.payload;
      return {
        ...state,
        isAuthorized,
      };
    }
    case SET_FETCH_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        status,
      };
    }
    default:
      return state;
  }
};
