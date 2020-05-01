import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { reposReducer } from "./repos/reducer";

export default combineReducers({ auth: authReducer, repos: reposReducer });
