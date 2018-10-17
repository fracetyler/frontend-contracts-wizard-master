import { List, Map } from 'immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const ADD_RESERVE = 'wizard/reserve/ADD_RESERVE';
export const REMOVE_RESERVE = 'wizard/reserve/REMOVE_RESERVE';
export const OPEN_ADD_RESERVE_POPUP = 'wizard/reserve/OPEN_ADD_RESERVE_POPUP';
export const CLOSE_ADD_RESERVE_POPUP = 'wizard/reserve/CLOSE_ADD_RESERVE_POPUP';


export const addReserve = createAction(ADD_RESERVE);
export const removeReserve = createAction(REMOVE_RESERVE);
export const openAddReservePopup = createAction(OPEN_ADD_RESERVE_POPUP);
export const closeAddReservePopup = createAction(CLOSE_ADD_RESERVE_POPUP);

const initialState = Map({
  addReservePopupIsOpen: false,
  list: List([
    Map({
      name: 'Bounty',
      address: '0x2AE99c889ea685F314fE8Bfb80787F1E500f31D1',
      amount: 50000
    }),
    Map({
      name: 'Advisers',
      address: '0x2AE99c889ea685F314fE8Bfb80787F1E500f31D2',
      amount: 50000
    }),
    Map({
      name: 'Marketolog',
      address: '0x2AE99c889ea685F314fE8Bfb80787F1E500f31D3',
      amount: 150000
    })
  ])
});

export default createReducer({
  [ADD_RESERVE]: (state, { payload }) => (
    state.updateIn(['list'], (list) => list.push(Map(payload)))
  ),

  [REMOVE_RESERVE]: (state, { payload }) => (
    state.updateIn(['list'], (list) => list.filter((el) => el.get('address') !== payload))
  ),

  [OPEN_ADD_RESERVE_POPUP]: (state) => (
    state.setIn(['addReservePopupIsOpen'], true)
  ),

  [CLOSE_ADD_RESERVE_POPUP]: (state) => (
    state.setIn(['addReservePopupIsOpen'], false)
  )
}, initialState);
