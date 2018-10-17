import { fromJS } from 'immutable';
import { createReducer, createAction } from '../../../utils/actions';


export const step = {
  TOKEN: 'TOKEN',
  CROWDSALE: 'CROWDSALE',
  TIER: 'TIER',
  RESERVE: 'RESERVE',
  RESULT: 'RESULT'
};

export const status = {
  PASSED: 'PASSED',
  ACTIVE: 'ACTIVE',
  UNAVAILABLE: 'UNAVAILABLE',
  ERROR: 'ERROR'
};


export const CHANGE_STEP = 'wizard/steps/CHANGE_STEP';
export const CHANGE_STATUS = 'wizard/steps/CHANGE_STATUS';


export const changeStep = createAction(CHANGE_STEP);
export const changeStatus = createAction(CHANGE_STATUS);


const initialState = fromJS({
  index: 3,
  steps: [
    {
      key: 'token',
      index: 0,
      status: status.ACTIVE
    },
    {
      key: 'crowdsale',
      index: 1,
      status: status.UNAVAILABLE
    },
    {
      key: 'tier',
      index: 2,
      status: status.UNAVAILABLE
    },
    {
      key: 'reserve',
      index: 3,
      status: status.UNAVAILABLE
    },
    {
      key: 'result',
      index: 4,
      status: status.UNAVAILABLE
    },
  ]
});

export default createReducer({
  [CHANGE_STEP]: (state, { payload }) => (
    state.setIn(['index'], payload)
  ),

  [CHANGE_STATUS]: (state, { payload }) => (
    state.updateIn(['steps'], (steps) =>
      steps.map((step) =>
        (step.get('index') === payload.index
          ? step.setIn(['status'], payload.status)
          : step)))
  )
}, initialState);
