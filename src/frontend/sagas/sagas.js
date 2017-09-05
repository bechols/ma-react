import { call, put, takeEvery } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import { delay } from 'redux-saga';
import { JOB_ADDED } from '../actions/actions';

function* processJobSubmit (action) {
  try {
    yield call(delay, 2000);
    yield put({
      type: 'JOB_ADDED',
      endpoints: action.endpoints,
      file: action.file,
      template: action.template
    });
  } catch (e) {
     //yield put({type: 'USER_FETCH_FAILED', message: e.message});
  }
}

function* submitJob () {
  yield takeEvery('SUBMIT_JOB', processJobSubmit);
}

export default submitJob;
