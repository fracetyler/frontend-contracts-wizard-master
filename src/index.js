import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { AppContainer } from 'react-hot-loader';
import { FocusStyleManager } from '@blueprintjs/core';

import 'normalize.css';
import './assets/scss/blueprint.scss';
import './assets/css/main.css';

import Main from './containers/app/Main';

import { history, store } from './redux/configureStore';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Main/>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();
FocusStyleManager.onlyShowFocusOnTabs();

if (module.hot) {
  module.hot.accept('./containers/app/Main', () => {
    render(require('./containers/app/Main').default);
  });
}
