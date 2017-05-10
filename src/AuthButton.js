import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import fakeAuth from './services/fakeAuth'

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

export default AuthButton;