import { call, takeEvery, select, put } from "redux-saga/effects";
import { getAccessTokenRequest } from "../../../data-providers";
import { GET_ACCESS_TOKEN, setAccessToken, setFetchStatus } from "../actions";
import { getAuthCodeSelector } from "../selectors";
import { parse } from "query-string";
import ls from "../../../constants/localStorage";
import fetchStatuses from "../../../constants/fetchStatuses";

export function* getAccessTokenSaga() {
  try {
    const code = yield select(getAuthCodeSelector);

    yield put(setFetchStatus(fetchStatuses.IN_PROGRESS));
    const data = yield call(getAccessTokenRequest, code);

    const { access_token } = parse(data);

    if (access_token) {
      localStorage.setItem(ls.token, access_token);
      yield put(setFetchStatus(fetchStatuses.DONE));
      yield put(setAccessToken(access_token));
    }
  } catch (error) {
    yield put(setFetchStatus(fetchStatuses.FAILED));
    console.warn(error);
  }
}

export function* watchGetAccessTokenSaga() {
  yield takeEvery(GET_ACCESS_TOKEN, getAccessTokenSaga);
}
