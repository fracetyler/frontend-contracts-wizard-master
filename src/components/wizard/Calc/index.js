import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.scss';

const Calc = (props) => {
  const {
    data
  } = props;

  return (
    <div className={s.calc}>
      {data.map((dat) => (
        <div key={dat.label} className={s.calcBlock}>
          <div className={s.calcVal}>{dat.value}</div>
          <div className={s.calcLabel}>{dat.label}</div>
        </div>
      ))}
    </div>
  );
};

Calc.propTypes = {
  data: [
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ]
};

export default Calc;
