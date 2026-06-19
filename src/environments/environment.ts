export const environment = {
  production: false,
  apiUrl: 'https://localhost:7113',
  auth0: {
    domain: 'simbiosisgymapp.us.auth0.com',
    clientId: 'sxYsO6V0lt851PnXYBV6JBmoMVF3bN5v',
    audience: 'https://gymmanagement-api',
    rolesClaim: 'https://gymmanagement-api/roles',
    redirectUri: 'http://localhost:4301',
    logoutReturnTo: 'http://localhost:4301'
  }
};


