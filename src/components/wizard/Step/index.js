import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import classnames from 'classnames/bind';

import { status } from '../../../redux/modules/wizard/steps';

import s from './styles.scss';


const cx = classnames.bind(s);

const Step = (props) => {
  const renderPassedStep = () => (
    <div
      className={cx(s.step, s.passed)}
      onClick={props.onClick}>
      <div className={s.icon}>
        <Icon icon={IconNames.TICK_CIRCLE} iconSize={Icon.SIZE_LARGE}/>
      </div>
      <div className={s.name}>
        {props.name}
      </div>
    </div>
  );

  const renderActiveStep = () => (
    <div
      className={cx(s.step, s.active)}>
      <div className={s.icon}>
        <Icon icon={IconNames.CIRCLE} iconSize={Icon.SIZE_LARGE}/>
      </div>
      <div className={s.name}>
        {props.name}
      </div>
    </div>
  );

  const renderUnavailableStep = () => (
    <div
      className={cx(s.step, s.unavailable)}>
      <div className={s.icon}>
        <Icon icon={IconNames.CIRCLE} iconSize={Icon.SIZE_LARGE}/>
      </div>
      <div className={s.name}>
        {props.name}
      </div>
    </div>
  );

  const renderErrorStep = () => (
    <div
      className={cx(s.step, s.error)}
      onClick={props.onClick}>
      <div className={s.icon}>
        <Icon icon={IconNames.BAN_CIRCLE} iconSize={Icon.SIZE_LARGE}/>
      </div>
      <div className={s.name}>
        {props.name}
      </div>
    </div>
  );

  switch (props.status) {
    case status.PASSED: return renderPassedStep();
    case status.ACTIVE: return renderActiveStep();
    case status.UNAVAILABLE: return renderUnavailableStep();
    case status.ERROR: return renderErrorStep();

    default: return null;
  }
};

Step.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(status)
};

export default Step;
