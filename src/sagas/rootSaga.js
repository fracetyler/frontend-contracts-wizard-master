import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import counterSaga from './app/counterSaga';
import stepsSaga from './wizard/stepsSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(counterSaga),
    fork(stepsSaga)
  ]);
}
