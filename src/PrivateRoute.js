import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     false ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// );

class PrivateRoute extends Component {
  render() {
    const { component: Component, authenticated: authenticated, ...rest } = this.props;
    console.log("PrivateRoute");
    console.log("")
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


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     (
//       <Component {...props}/>
//     ) 
//   )}/>
// );

export default PrivateRoute;
