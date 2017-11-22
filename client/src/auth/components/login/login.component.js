import React from 'react';

import { Link } from 'react-router';


const isLoggedIn = true;
const name = 'John Doe';

// missing log out button
const LoggedIn = ({ name }) => (
  <div>Hello, { name }!</div>
);

const LoginLink = () => (
  <Link to="/login">Login</Link>
);

export const Login = () => (
  isLoggedIn ? <LoggedIn name={name}></LoggedIn> : <LoginLink></LoginLink>
);
