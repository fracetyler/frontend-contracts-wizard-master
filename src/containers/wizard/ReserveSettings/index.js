import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

import { changeStatus, changeStep } from '../../../redux/modules/wizard/steps';
import { removeReserve, addReserve, openAddReservePopup, closeAddReservePopup } from '../../../redux/modules/wizard/reserve';

import ToJS from '../../../components/common/ToJS';
import Calc from '../../../components/wizard/Calc';
import Reserve from '../../../components/wizard/Reserve';
import AddReservePopup from '../../../components/wizard/AddReservePopup';

import s from './styles.scss';

class ReserveSettings extends Component {
  render() {
    const {
      removeReserve,
      addReserve,
      reserve,
      addReservePopupIsOpen,
      openAddReservePopup,
      closeAddReservePopup
    } = this.props;

    // const step = steps.find((el) => el.key === 'reserve');
    const reserved = reserve.reduce((acc, val) => acc + Number(val.amount), 0);

    const ISSUED = 500000;
    const SOLD = 300000;
    const TICKER = 'SPC';

    return (
      <div>
        <div className={s.calc}>
          <Calc data={[
            { label: 'Will be issued', value: `${ISSUED} ${TICKER}` },
            { label: 'Will be sold', value: `${SOLD} ${TICKER}` },
            { label: 'Will be reserved', value: `${reserved} ${TICKER}` }
          ]}/>
        </div>

        <div className={s.list}>
          {reserve.map((el) => (
            <Reserve
              key={el.address}
              ticker={TICKER}
              onClick={() => removeReserve(el.address)}
              {...el}/>
          ))}
        </div>

        <Button onClick={openAddReservePopup}>Add reserve</Button>

        <AddReservePopup
          isOpen={addReservePopupIsOpen}
          onClose={closeAddReservePopup}
          addReserve={addReserve}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    steps: state.get('wizard').get('steps').get('steps'),
    reserve: state.get('wizard').get('reserve').get('list'),
    addReservePopupIsOpen: state.get('wizard').get('reserve').get('addReservePopupIsOpen')
  }),
  {
    changeStatus,
    changeStep,
    removeReserve,
    addReserve,
    openAddReservePopup,
    closeAddReservePopup
  }
)(ToJS(ReserveSettings));
