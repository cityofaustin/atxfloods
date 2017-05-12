import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import appConfig from "./cognitoConfig";

Config.region = appConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId,
});

module.exports = {
  isAuthenticated() {
    var cognitoUser = userPool.getCurrentUser();
    var validSession = false;

    if (cognitoUser != null) {
      cognitoUser.getSession(function(err, session) {
        validSession = err ? false : session.isValid();
      });
    }

    return validSession;
  },

  authenticate(username, password, cb) {
    var authenticationData = {
        Username : username,
        Password : password,
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);

    var userData = {
        Username : username,
        Pool : userPool
    };
    var cognitoUser = new CognitoUser(userData);
    
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          cb.call();
        },

        onFailure: function(err) {
          alert(err);
        },
    });
  },

  signout(cb) {
    var cognitoUser = userPool.getCurrentUser();
    if (cognitoUser != null) cognitoUser.signOut();
    cb.call();
  }
}