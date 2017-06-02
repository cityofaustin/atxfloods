import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import auth from './services/awsAuth';

class Login extends Component {
  state = {
    redirectToReferrer: false,
    username: '',
    password: ''
  }

  handleUserChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var password = this.state.password.trim();

    auth.authenticate(username, password, () => {
      this.setState({ redirectToReferrer: true })
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
                 value={this.state.username}
                 placeholder="Username"
                 onChange={this.handleUserChange.bind(this)}/>
          <input type="password"
                 value={this.state.password}
                 placeholder="Password"
                 onChange={this.handlePasswordChange.bind(this)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Login;
