import React from 'react';
import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';

import { Auth0ContextProps, Auth0ProviderProps } from './types';

const defaultValue: Auth0ContextProps = {
  error: '',
  isAuthenticated: false,
  isLoading: true,
  user: null,
  getTokenSilently(...props) {},
  login(...props: any) {},
  logout(...props: any) {},
  updateError(message: string) {},
};

export const Auth0Context = React.createContext(defaultValue);
export const useAuth0Context = () => React.useContext(Auth0Context);

export function Auth0Provider({ children }: Auth0ProviderProps) {
  const [auth0Client, setAuth0Client] = React.useState<Auth0Client | null>(
    null,
  );
  const [error, setError] = React.useState('');
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  const { REACT_APP_AUTH_DOMAIN, REACT_APP_AUTH_ID } = process.env;

  console.log('auth0Client', auth0Client);

  React.useEffect(() => {
    async function initializeAuth0() {
      if (REACT_APP_AUTH_DOMAIN && REACT_APP_AUTH_ID && !user) {
        const auth0 = await createAuth0Client({
          client_id: REACT_APP_AUTH_ID,
          domain: REACT_APP_AUTH_DOMAIN,
          redirect_uri: window.location.origin,
        });

        setAuth0Client(auth0);

        if (
          window.location.search.includes('code=') &&
          window.location.search.includes('state=')
        ) {
          try {
            await auth0.handleRedirectCallback();
          } catch (error) {
            alert(error);
          }

          window.history.replaceState({}, document.title, '/');
        }

        const isAuthenticated = await auth0.isAuthenticated();
        setAuthenticated(isAuthenticated);

        if (isAuthenticated) {
          const user = await auth0.getUser();
          setUser(user);
        }

        setLoading(false);
      }
    }

    initializeAuth0();
  }, [REACT_APP_AUTH_DOMAIN, REACT_APP_AUTH_ID, user]);

  const updateError = (message: string) => setError(message);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Auth0Context.Provider
      value={{
        error,
        isAuthenticated,
        isLoading,
        user,
        getTokenSilently(...props) {
          return auth0Client?.getTokenSilently(...props);
        },
        login(...props: any) {
          auth0Client?.loginWithRedirect(...props);
        },
        logout(...props: any) {
          auth0Client?.logout(...props);
        },
        updateError,
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
}
