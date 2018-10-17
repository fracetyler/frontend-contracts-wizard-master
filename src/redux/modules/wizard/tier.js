import { List, Map } from 'immutable';
import { createReducer } from '../../../utils/actions';

const initialState = List([
  Map({
    name: 'test tier',
    start: 0,
    end: 0,
    rate: '200',
    softCap: '100000',
    hardCap: '500000'
  })
]);

export default createReducer({}, initialState);
