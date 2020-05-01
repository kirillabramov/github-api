import { call, takeEvery, select, put } from "redux-saga/effects";
import { getAccessTokenRequest } from "../../../data-providers/auth";
import { GET_ACCESS_TOKEN, setAccessToken } from "../actions";
import { getAuthCodeSelector } from "../selectors";
import { parse } from "query-string";
import ls from "../../../constants/localStorage";

export function* getAccessTokenSaga() {
  try {
    const code = yield select(getAuthCodeSelector);
    const data = yield call(getAccessTokenRequest, code);
    const { access_token } = parse(data);

    if (access_token) {
      localStorage.setItem(ls.token, access_token);
      yield put(setAccessToken(access_token));
    }
  } catch (error) {
    console.warn(error);
  }
}

export function* watchGetAccessTokenSaga() {
  yield takeEvery(GET_ACCESS_TOKEN, getAccessTokenSaga);
}
