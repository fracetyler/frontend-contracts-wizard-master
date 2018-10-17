import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import * as routes from '../../../routes';

import AuthError from '../../../components/auth/AuthError';

class AuthWrapper extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={routes.AUTH_ERROR} component={AuthError}/>
      </Switch>
    );
  }
}

const ConnectedComponent = connect(null)(AuthWrapper);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
