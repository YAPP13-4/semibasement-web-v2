import { all } from 'redux-saga/effects';
import sebaMusicRoot from './getMusicInfo/saga';

export default function* rootSaga() {
  yield all([sebaMusicRoot()]);
}
