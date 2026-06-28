export const environment = {
  production: true,
  apiUrl: 'https://gymappmanagement-ckg5chcyctdacdf9.brazilsouth-01.azurewebsites.net',
  auth0: {
    domain: 'simbiosisgymapp.us.auth0.com',
    clientId: 'sxYsO6V0lt851PnXYBV6JBmoMVF3bN5v',
    audience: 'https://gymmanagement-api',
    rolesClaim: 'https://gymmanagement-api/roles',
    redirectUri: 'https://simbiosisgym.com.ar',
    logoutReturnTo: 'https://simbiosisgym.com.ar'
  }
};
