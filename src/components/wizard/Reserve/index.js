import React from 'react';
import PropTypes from 'prop-types';
import { Callout, Button, Intent, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import s from './styles.scss';

const Reserve = (props) => {
  const {
    name,
    address,
    amount,
    ticker,
    ...restProps
  } = props;

  return (
    <Callout className={s.container}>
      <div className={s.name}><b>{name}</b> | {amount} {ticker}</div>
      <div className={s.address}>{address}</div>
      <div className={s.del}>
        <Button minimal intent={Intent.DANGER} {...restProps}>
          <Icon icon={IconNames.CROSS}/>
        </Button>
      </div>
    </Callout>
  );
};

Reserve.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Reserve;
