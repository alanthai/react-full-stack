import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { UserGroup } from '../../../types/user-group.type';


let EmployeeForm = ({ handleSubmit, pristine, submitting, initialValues }) => (
  <form onSubmit={handleSubmit}>
    <label>
      Name
      <Field name="name" component="input" type="text" />
    </label>

    <label>
      Email
      <Field name="email" component="input" type="text" />
    </label>

    <label>
      Group
      <Field name="group" component="select">
        <option value={ UserGroup.Employee }>{ UserGroup.Employee }</option>
        <option value={ UserGroup.Admin }>{ UserGroup.Admin }</option>
      </Field>
    </label>

    <button type="submit" disabled={pristine || submitting}>
      { !!initialValues ? 'Edit ' : 'Add ' }
      Employee
    </button>
  </form>
);

EmployeeForm = reduxForm({
  form: 'employeeForm'
})(EmployeeForm);

export { EmployeeForm };
