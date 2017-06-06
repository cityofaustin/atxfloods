import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { component: Component, authenticated: authenticated, ...rest } = this.props;

    return (
      <Route {...rest} render={props => (
        authenticated ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    );
  }
}

export default PrivateRoute;
