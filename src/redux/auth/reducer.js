import { SET_AUTH_CODE, SET_ACCESS_TOKEN } from "./actions";

const defaultState = {
  code: "",
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
      };
    }
    default:
      return state;
  }
};
