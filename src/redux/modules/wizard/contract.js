import { Map } from 'immutable';
import { createReducer, createAction } from '../../../utils/actions';


export const CHANGE_STEP = 'wizard/steps/CHANGE_STEP';
export const CHANGE_STATUS = 'wizard/steps/CHANGE_STATUS';


export const changeStep = createAction(CHANGE_STEP);
export const changeStatus = createAction(CHANGE_STATUS);


const initialState = Map({
  token: {
    name: 'SPACE',
    ticker: 'SPC',
    decimals: 18,
    totalSuply: 500000
  },
  crowdsale: {
    walletAddress: '',
    minContribution: '',
    gasPrice: '',
    whitelist: true,
    kyc: true
  },
  tiers: [
    {
      name: '',
      start: 0,
      end: 0,
      rate: '',
      softCap: '',
      hardCap: ''
    }
  ],
  reserves: [
    {
      name: '',
      address: '',
      amount: ''
    }
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
