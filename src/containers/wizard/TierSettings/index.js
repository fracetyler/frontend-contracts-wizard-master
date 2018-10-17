import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

import { changeStatus, changeStep, status } from '../../../redux/modules/wizard/steps';

import ToJS from '../../../components/common/ToJS';

class TierSettings extends Component {
  render() {
    const {
      changeStatus,
      changeStep,
      steps
    } = this.props;

    const step = steps.find((el) => el.key === 'tier');

    return (
      <div>
        <div>Tier settings</div>

        <Button
          onClick={() => changeStatus({ index: 2, status: status.PASSED })}>VERIFY</Button>

        <Button
          disabled={step.status !== status.PASSED}
          onClick={() => changeStep(3)}>NEXT STEP</Button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    steps: state.get('wizard').get('steps').get('steps')
  }),
  {
    changeStatus,
    changeStep
  }
)(ToJS(TierSettings));
