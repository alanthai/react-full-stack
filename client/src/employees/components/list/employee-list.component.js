import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatDate } from '../../../utils/format-date';
import * as EmployeesSelectors from '../../../store/selectors/employees.selectors';
import { combineSelectors } from '../../../store/utils/combine-selectors';
import { addEmployee, fetchEmployees, removeEmployee } from '../../../store/actions/employees.actions';
import { EmployeeForm } from '../form/employee-form';


let EmployeeList = class extends Component {
  constructor(props) {
    super(props);
    this.props.fetchEmployees();
  }

  render() {
    const { addEmployee, employees, removeEmployee } = this.props;
    return (
      <employee-list>
        <EmployeeForm onSubmit={addEmployee} />
        <table>
          <thead>
          <tr>
            <td>Name</td>
            <td>Last Updated</td>
            <td>Actions</td>
          </tr>
          </thead>
          <tbody>
          {
            employees.map(employee =>
              <tr key={employee.id}>
                <td><Link to={`/employees/${employee.id}`}>{ employee.name }</Link></td>
                <td>{ employee.lastReviewed ? formatDate(employee.lastReviewed) : 'None' }</td>
                <td><button onClick={() => removeEmployee(employee.id)}>Remove</button></td>
              </tr>)
          }
          </tbody>
        </table>
      </employee-list>
    );
  }
}

EmployeeList = connect(
  combineSelectors({ employees: EmployeesSelectors.employees }),
  { fetchEmployees, removeEmployee, addEmployee }
)(EmployeeList);

export { EmployeeList }
