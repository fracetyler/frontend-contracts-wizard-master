import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import counter from './modules/app/counter';

import steps from './modules/wizard/steps';
import token from './modules/wizard/token';
import crowdsale from './modules/wizard/crowdsale';
import tier from './modules/wizard/tier';
import reserve from './modules/wizard/reserve';

export default combineReducers({
  form,

  app: combineReducers({
    counter
  }),

  wizard: combineReducers({
    steps,
    token,
    crowdsale,
    tier,
    reserve
  })
});
