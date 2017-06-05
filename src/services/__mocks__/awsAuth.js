  const mockAuth = jest.genMockFromModule('../awsAuth');
  function isAuthenticated() {console.log("blarg");return true;};
  mockAuth.isAuthenticated = isAuthenticated;
  module.exports = mockAuth;
