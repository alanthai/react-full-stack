import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './app.css';

import { EmployeeList } from './employees/components/list/employee-list.component';
import { Home } from './home/components/home/home.component';
import { EmployeeDetails } from './employees/components/details/employee-details.component';
import {
  PerformanceReviewDetails
} from './performance-reviews/components/details/performance-review-details.component';


const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Full Stack Challenge</h1>
  </header>
);

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path="/" render={Home}/>
        <Route exact path="/employees" component={EmployeeList} />
        <Route exact path="/employees/:id" component={EmployeeDetails} />
        <Route exact path="/performance-reviews/:id" component={PerformanceReviewDetails} />
      </div>
    );
  }
}
