import { AuthProvider } from 'react-admin';

const fetchMe = async () => {
    const { authToken } = getAuthCookie()
    if (!authToken){
        return Promise.reject()
    }

    const response = await fetch('/api/Me', {headers: {authorization: `Bearer ${authToken}`}})
    const me = await response.json()
    return me
}

export const getAuthCookie = (): Record<string, string> => {
    const name = "auth=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
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
       const me = await fetchMe()
        if (!me) {
            return Promise.reject()
        }
        return Promise.resolve()
    },
    logout: async () => {
        fetch('/logout', {method: 'POST'})
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
    getIdentity: async () => {
        const me = await fetchMe()
        return Promise.resolve({
            id: 'user',
            fullName: `${me.firstName} ${me.lastName}`,
        })},
    getPermissions: () => Promise.resolve(''),
};