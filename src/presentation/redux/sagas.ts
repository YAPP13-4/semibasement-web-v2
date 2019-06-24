import { all } from 'redux-saga/effects';
import { homeMusicSaga } from './getMusicInfo';

export default function* rootSaga() {
  yield all([...homeMusicSaga]);
}
