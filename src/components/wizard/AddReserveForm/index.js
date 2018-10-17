import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import { Button, Intent } from '@blueprintjs/core';

import { required } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';

const AddReserveForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        label="Reserve name"
        name="name"
        component={RenderInput}
        large
        fill
        placeholder="e.g. Pre-ICO"
        validate={required}/>

      <Field
        label="Address"
        name="address"
        component={RenderInput}
        large
        fill
        placeholder="Valid ethereum address"
        validate={required}/>

      <Field
        label="Amount tokens"
        name="amount"
        component={RenderInput}
        large
        fill
        placeholder="Amount"
        validate={required}/>

      <div>
        <Button
          type="submit"
          large
          fill
          intent={Intent.PRIMARY}
          text="Add reserve"
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({ form: 'addReserve' })(AddReserveForm);
export default FormComponent;
