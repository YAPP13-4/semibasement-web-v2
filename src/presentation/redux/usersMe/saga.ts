import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Application } from 'application/@context';
import { requestUsersMeSuccess, requestUsersMeFail, REQUEST } from './actions';

export function* getSebaCurationMusicLists() {
  try {
    const data = yield call(Application.service., null);

    yield put(requestUsersMeSuccess(data));
  } catch (error) {
    yield put(requestUsersMeFail(error));
  }
}

export function* watchLoadSebaCurationMusic() {
  yield takeLatest(REQUEST, getSebaCurationMusicLists);
}

export default function* sebaMusicRoot() {
  yield all([watchLoadSebaCurationMusic()]);
}
