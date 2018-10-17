import { all, takeEvery, fork, put } from 'redux-saga/effects';

import { CHANGE_STEP, changeStatus, status } from '../../redux/modules/wizard/steps';


function* changeStepIterator({ payload }) {
  for (let index = 0; index < 5; index += 1) {
    if (index === payload) yield put(changeStatus({ index, status: status.ACTIVE }));
    if (index < payload) yield put(changeStatus({ index, status: status.PASSED }));
    if (index > payload) yield put(changeStatus({ index, status: status.UNAVAILABLE }));
  }
}

function* changeStepSaga() {
  yield takeEvery(
    CHANGE_STEP,
    changeStepIterator
  );
}


export default function* () {
  yield all([
    fork(changeStepSaga)
  ]);
}
