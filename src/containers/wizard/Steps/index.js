import React from 'react';
import { connect } from 'react-redux';

import { changeStep } from '../../../redux/modules/wizard/steps';

import ToJS from '../../../components/common/ToJS';
import Step from '../../../components/wizard/Step';

import s from './styles.scss';

const Steps = (props) => {
  const {
    changeStep,
    steps
  } = props;

  return (
    <div className={s.steps}>
      {steps.map((step) => (
        <Step
          key={step.key}
          name={step.key}
          status={step.status}
          onClick={() => changeStep(step.index)}/>
      ))}
    </div>
  );
};

export default connect(
  (state) => ({
    steps: state.get('wizard').get('steps').get('steps')
  }),
  {
    changeStep
  }
)(ToJS(Steps));
