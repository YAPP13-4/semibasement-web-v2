import { all } from 'redux-saga/effects';
import sebaMusicRoot from './music/saga';

export default function* rootSaga() {
  yield all([sebaMusicRoot()]);
}
