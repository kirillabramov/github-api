import { all } from "redux-saga/effects";
import { watchGetAccessTokenSaga } from "./auth/sagas/auth";

export default function* rootSaga() {
  yield all([watchGetAccessTokenSaga()]);
}
