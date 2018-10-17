import { Map } from 'immutable';
import { createReducer } from '../../../utils/actions';

const initialState = Map({
  name: 'SPACE',
  ticker: 'SPC',
  decimals: 18,
  totalSuply: 500000
});

export default createReducer({}, initialState);
