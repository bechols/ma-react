import { call, put, takeEvery } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import { delay } from 'redux-saga';
import { JOB_ADDED } from '../actions/actions';

function* submitJobHelper (action) {
  try {
    yield call(delay, 2000);
    yield put({
      type: 'JOB_ADDED',
      endpoints: action.endpoints,
      file: action.file,
      template: action.template
    });
    //const user = yield call(Api.fetchUser, action.payload.userId);
    //yield put({type: 'USER_FETCH_SUCCEEDED', user: user});
    //yield takeEvery('SUBMIT_JOB', fetchUser);
  } catch (e) {
     //yield put({type: 'USER_FETCH_FAILED', message: e.message});
  }
}

function* submitJob () {
  yield takeEvery('SUBMIT_JOB', submitJobHelper);
}

export default submitJob;
