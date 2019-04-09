import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as MusicActions from './actions';
import { Application } from 'application/@context';
import { getType } from 'typesafe-actions';

export function* getSebaCurationMusicLists() {
	try {
		const data = yield call(null, Application.service.getCurationMusicList());
		yield put(MusicActions.successSebaCurationMusicLists(data));
	} catch (error) {}
}

export function* watchLoadSebaCurationMusic() {
	yield takeLatest(
		getType(MusicActions.requestSebaCurationMusicLists),
		getSebaCurationMusicLists,
	);
}

export default function* sebaMusicRoot() {
	yield all([watchLoadSebaCurationMusic()]);
}
