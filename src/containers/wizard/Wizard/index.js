import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Intent, Button } from '@blueprintjs/core';

import Steps from '../Steps';
import TokenSettings from '../TokenSettings';
import CrowdsaleSettings from '../CrowdsaleSettings';
import TierSettings from '../TierSettings';
import ReserveSettings from '../ReserveSettings';
import Result from '../Result';

import s from './styles.scss';

const Wizard = (props) => {
  const renderStep = () => {
    switch (props.currentStep) {
      case 0: return <TokenSettings/>;
      case 1: return <CrowdsaleSettings/>;
      case 2: return <TierSettings/>;
      case 3: return <ReserveSettings/>;
      case 4: return <Result/>;

      default: return null;
    }
  };

  return (
    <div>
      <div className={s.topbar}>
        <h3 className="bp3-heading">Contract wizard</h3>
        <Link className={s.link} to="/drafts"><Button minimal intent={Intent.DANGER}>BACK</Button></Link>
      </div>

      <div className={s.wizard}>
        <div className={s.steps}><Steps/></div>
        <div className={s.stepWrapper}>{renderStep()}</div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  currentStep: state.get('wizard').get('steps').get('index')
}))(Wizard);
