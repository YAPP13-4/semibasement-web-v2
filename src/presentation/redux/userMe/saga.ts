import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Application } from 'application/@context';
import { requestUserMeSuccess as requestUserMeSuccess, requestUserMeFail as requestUserMeFail, REQUEST } from './actions';

export function* getSebaCurationMusicLists() {
  try {
    const data = yield call(Application.service., null);

    yield put(requestUserMeSuccess(data));
  } catch (error) {
    yield put(requestUserMeFail(error));
  }
}

export function* watchLoadSebaCurationMusic() {
  yield takeLatest(REQUEST, getSebaCurationMusicLists);
}

export default function* sebaMusicRoot() {
  yield all([watchLoadSebaCurationMusic()]);
}
