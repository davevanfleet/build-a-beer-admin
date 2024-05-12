import { AuthProvider } from 'react-admin';

export const getAuthCookie = (): Record<string, string> => {
    let name = "auth=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return JSON.parse(c.substring(name.length, c.length));
      }
    }
    return {};
  }

export const authProvider: AuthProvider = {
    login: () => {
        // this should never be called, since we use external auth providers.
        // return rejected promise just to be safe
        return Promise.reject()
    },
    checkAuth: async () => {
        const cookie = getAuthCookie()
        if (cookie.authToken){
            return
        }
        return Promise.reject()
    },
    // A user logged successfully on the Auth0 service
    // and was redirected back to the /auth-callback route on the app
    handleCallback: async () => {
        // const query = window.location.search;
        // if (query.includes('code=') && query.includes('state=')) {
        //     try {
        //         // get an access token based on the query paramaters
        //         await Auth0Client.handleRedirectCallback();
        //         return;
        //     } catch (error) {
        //         console.log('error', error);
        //         throw error;
        //     }
        // }
        // throw new Error('Failed to handle login callback.');
        return Promise.resolve()
    },
    logout: async () => {
        // const isAuthenticated = await client.isAuthenticated();
        //     // need to check for this as react-admin calls logout in case checkAuth failed
        // if (isAuthenticated) {
        //     return client.logout({
        //         returnTo: window.location.origin,
        //     });
        // }
        return Promise.resolve()
    },
    checkError:  (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'John Doe',
        }),
    getPermissions: () => Promise.resolve(''),
};