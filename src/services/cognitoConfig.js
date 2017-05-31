export default {
  region: process.env.COGNITO_REGION,
  IdentityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
  UserPoolId: process.env.COGNITO_USER_POOL_ID,
  ClientId: process.env.COGNITO_CLIENT_ID,
}