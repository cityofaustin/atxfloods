import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Login from './Login';
import Public from './Public';
import PrivateRoute from './PrivateRoute';
import AuthButton from './AuthButton';
import CreateUser from './CreateUser';

const Protected = () => <h3>Protected</h3>

class FloodsAdminRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton/>
          <ul>
            <li><Link to="/public">Public Page</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
            <li><Link to="/createuser">Create User</Link></li>
          </ul>
          <Route path="/public" component={Public}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/protected" component={Protected}/>
          <PrivateRoute path="/createuser" component={CreateUser}/>
        </div>
      </Router>
    );
  }
}

export default FloodsAdminRouter;
