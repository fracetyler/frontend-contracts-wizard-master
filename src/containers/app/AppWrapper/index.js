import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Wizard from '../../wizard/Wizard';
import Drafts from '../../drafts/Drafts';

import * as routes from '../../../routes';

class AppWrapper extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={routes.WIZARD} component={Wizard}/>
        <Route exact path={routes.DRAFTS} component={Drafts}/>
        <Redirect exact from="/" to={routes.DRAFTS} />
      </Switch>
    );
  }
}

export default connect()(AppWrapper);
