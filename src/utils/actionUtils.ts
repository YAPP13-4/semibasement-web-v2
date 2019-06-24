import { createAction } from 'redux-actions';
import { all, call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from 'modules/loading';
// export type ActionFunction1<T1, R> = (t1: T1) => R;
export const createAsyncAction = (type: string) =>  {
  const FETCH = `${type}/FETCH`
  const SUCCESS = `${type}/SUCCESS`
  const FAILURE = `${type}/FAILURE`

  return {
    FETCH,
    SUCCESS,
    FAILURE,
    fetch: createAction(FETCH),
    success: createAction(SUCCESS),
    failure: createAction(FAILURE),
  }
}

export type ActionType = {
  type: string;
  payload: any;
}

export const createSaga = (type: string, req: any) => {
  const actions = createAsyncAction(type)

  return function*(action: any) {
    const payload = (action && action.payload) || null

    yield put(startLoading(type))
    try {
      if (typeof req === 'function') {
        const res = yield call(req, payload)
        yield put(actions.success(res))
      }

      if (Array.isArray(req)) {
        const res = yield all(req.map(r => () => call(r)))
        yield put(actions.success(res))
      }
    } catch (e) {
      yield put(actions.failure(e.statusCode))
    } finally {
      yield put(finishLoading(type))
    }
  }
}
