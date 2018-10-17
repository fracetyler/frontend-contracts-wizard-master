import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@blueprintjs/core';

import AddReserveForm from '../AddReserveForm';

import s from './styles.scss';

const AddReservePopup = (props) => {
  const {
    addReserve
  } = props;

  return (
    <Dialog
      title="Add new reserve"
      style={{ width: '400px' }}
      {...props}>
      <div className={s.form}>
        <AddReserveForm onSubmit={addReserve}/>
      </div>
    </Dialog>
  );
};

AddReservePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  addReserve: PropTypes.func.isRequired
};

export default AddReservePopup;
