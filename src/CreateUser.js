import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import auth from './services/awsAuth';

class CreateUser extends Component {
  state = {
    redirectToReferrer: false,
    username: '',
    name: ''
  }

  handleUserChange(e) {
    this.setState({username: e.target.value});
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var name = this.state.name.trim();

    auth.createUser(username, name, () => {
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
        <p>Create a User</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
                 value={this.state.username}
                 placeholder="Username"
                 onChange={this.handleUserChange.bind(this)}/>
          <input type="text"
                 value={this.state.name}
                 placeholder="Name"
                 onChange={this.handleNameChange.bind(this)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default CreateUser;