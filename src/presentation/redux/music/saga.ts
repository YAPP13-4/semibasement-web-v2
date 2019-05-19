import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Application } from 'application/@context';
import { requestSebaCurationMusicSuccess, requestSebaCurationMusicFail, REQUEST } from './actions';

export function* getSebaCurationMusicLists() {
	try {
		const data = yield call(null, Application.service.getCurationMusicList());
		yield put(requestSebaCurationMusicSuccess(data));
	} catch (error) {
    yield put(requestSebaCurationMusicFail(error))
  }
}

export function* watchLoadSebaCurationMusic() {
	yield takeLatest(
    REQUEST,
		getSebaCurationMusicLists,
	);
}

export default function* sebaMusicRoot() {
	yield all([watchLoadSebaCurationMusic()]);
}
