import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import auth from './services/awsAuth'

const AuthButton = withRouter(({ history }) => (
  auth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        auth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

export default AuthButton;