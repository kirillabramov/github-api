import { all } from "redux-saga/effects";
import { watchGetAccessTokenSaga } from "./auth/sagas/auth";
import { watchGetReposSaga } from "./repos/sagas/repos";

export default function* rootSaga() {
  yield all([watchGetAccessTokenSaga(), watchGetReposSaga()]);
}
