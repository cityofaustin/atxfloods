import AWS, {CognitoIdentityCredentials, CognitoIdentityServiceProvider} from "aws-sdk";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import appConfig from "./cognitoConfig";

AWS.config.region = appConfig.region;
AWS.config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId,
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
          var loginKey = 'cognito-idp.'+appConfig.region+'.amazonaws.com/'+appConfig.UserPoolId;
          var logins = {};
          logins[loginKey] = result.getIdToken().getJwtToken();

          AWS.config.credentials = new CognitoIdentityCredentials({
            IdentityPoolId: appConfig.IdentityPoolId,
            Logins: logins
          });

          AWS.config.credentials.refresh((error) => {
            if (error) console.error(error);
          });
          cb.call();
        },

        onFailure: function(err) {
          alert(err);
        },
    });
  },

  createUser(username, email, cb) {
    var params = {
      UserPoolId: appConfig.UserPoolId,
      Username: username,
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
      ],
    };

    var cisp = new CognitoIdentityServiceProvider(AWS.config);
    cisp.adminCreateUser(params, function(err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
      } 
      else {
        console.log(data);           // successful response
        cb.call();
      }   
    });
  },

  signout(cb) {
    var cognitoUser = userPool.getCurrentUser();
    if (cognitoUser != null) cognitoUser.signOut();
    cb.call();
  }
}
