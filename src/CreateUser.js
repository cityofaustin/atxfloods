import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from './services/gqlAuth';

class CreateUser extends Component {
  state = {
    redirectToReferrer: false,
    username: '',
    email: ''
  }

  handleUserChange(e) {
    this.setState({username: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var email = this.state.email.trim();

    auth.createUser(username, email, () => {
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
                 value={this.state.email}
                 placeholder="Email"
                 onChange={this.handleEmailChange.bind(this)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default CreateUser;
