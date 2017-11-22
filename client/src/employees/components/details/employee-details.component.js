import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatDate } from '../../../utils/format-date';
import { combineSelectors } from '../../../store/utils/combine-selectors';
import * as EmployeesSelectors from '../../../store/selectors/employees.selectors';
import { fetchEmployee, updateEmployee } from '../../../store/actions/employees.actions';
import { fetchPerformanceReviews } from '../../../store/actions/performance-reviews.actions';
import { EmployeeForm } from '../form/employee-form';


let EmployeeDetails = class extends Component {
  constructor(props) {
    super(props);

    const { employee, fetchEmployee, fetchPerformanceReviews, match } = this.props;
    if (!employee) {
      fetchEmployee(match.params.id);
    }
    if (!employee || !employee.reviews) {
      fetchPerformanceReviews(match.params.id);
    }
  }

  render() {
    const { employee, updateEmployee } = this.props;
    return (
      <employee-details>
        <h2>Employee Details</h2>

        <EmployeeForm
          initialValues={employee}
          onSubmit={(form) => updateEmployee({ id: employee.id, ...form })} />

        <div>
          <h3>Reviews</h3>

          <table>
            <thead>
            <tr>
              <td>From</td>
              <td>Date</td>
            </tr>
            </thead>
            <tbody>
              { employee && employee.reviews
                ? employee.reviews.map((review, i) => (
                    <tr key={i}>
                      <td>
                        <Link to={`/performance-reviews/${review.id}`}>{ review.reviewerId }</Link>
                      </td>
                      <td>{ formatDate(review.completed) }</td>
                    </tr>
                  ))
                : <tr></tr>
              }
            </tbody>
          </table>
        </div>
      </employee-details>
    );
  }
};

EmployeeDetails = connect(
  combineSelectors({ employee: EmployeesSelectors.employeeDetails }),
  { fetchEmployee, fetchPerformanceReviews, updateEmployee },
)(EmployeeDetails);

export { EmployeeDetails }
