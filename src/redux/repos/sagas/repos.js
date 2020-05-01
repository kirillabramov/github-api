import { call, takeEvery, put, select } from "redux-saga/effects";
import { getRepositoriesRequset } from "../../../data-providers/auth";
import { GET_REPOS, setStatus, setRepositories, setHasMore } from "../actions";
import fetchStatuses from "../../../constants/fetchStatuses";
import { getReposSelector } from "../selectors";

export function* getReposSaga() {
  try {
    let repos;
    const { searchValue, pageNumber, sorting } = yield select(getReposSelector);

    if (!!searchValue.length) {
      yield put(setStatus(fetchStatuses.IN_PROGRESS));

      const { items } = yield call(
        getRepositoriesRequset,
        searchValue,
        pageNumber,
        sorting
      );
      repos = items;
    }

    if (repos) {
      yield put(setStatus(fetchStatuses.DONE));
      yield put(setHasMore(repos.length > 0));
      yield put(setRepositories(repos));
    }
  } catch (error) {
    yield put(setStatus(fetchStatuses.FAILED));
    console.warn(error);
  }
}

export function* watchGetReposSaga() {
  yield takeEvery(GET_REPOS, getReposSaga);
}
