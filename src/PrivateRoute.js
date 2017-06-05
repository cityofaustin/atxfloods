import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './services/awsAuth';

class PrivateRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route {...rest} render={(props) => (
        auth.isAuthenticated() ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: this.props.location }
          }}/>
        )
      )}/>
    );
  }
}

export default PrivateRoute;
