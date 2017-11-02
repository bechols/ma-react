import { all, call, put, takeEvery } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import { delay } from 'redux-saga';
import { SET_CURRENT_ORGANIZATION, JOB_ADDED } from '../actions/actions';

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
     //yield put({type: 'FAILED_TO_ADD_JOB', message: e.message});
  }
}

function* submitJob () {
  yield takeEvery('SUBMIT_JOB', processJobSubmit);
}

const username = 'TIUR5STJRBF3NR8VQFKL';
const password = 'IFy8RJNsnr2PwRjQZgPVDfewRFJAeVMa';
const headers = new Headers();

headers.append('Content-Type', 'text/json');
headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

function* processCurrentOrgRequest (action) {
  const currentOrgUrl = 'https://api.housecanary.com/api/v1/auth/current-organization';
  let dataEnterprise, dataTrial, dataOrganizationName;

  try {
    yield fetch(currentOrgUrl, {method: 'GET',
      headers: headers
    }).then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: '
            + response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data);
          dataEnterprise = data.enterprise;
          dataTrial = data.z_account_id !== null;
          dataOrganizationName = data.name;
          });
        }
      );
      yield put({
        type: 'SET_CURRENT_ORGANIZATION',
        isEnterprise: dataEnterprise,
        isTrial: dataTrial,
        organizationName: dataOrganizationName
      });
      console.log('Enterprise: ', dataEnterprise, ' Trial: ', dataTrial);
    } catch (e) {
    //yield put({type: 'FAILED_TO_SET_CURRENT_ORGANIZATION', message: e.message});
  }
}

function* getCurrentOrganization () {
  yield takeEvery('GET_CURRENT_ORGANIZATION', processCurrentOrgRequest);
}

export default function* rootSaga () {
  yield all([
    submitJob(),
    getCurrentOrganization()
  ]);
}
