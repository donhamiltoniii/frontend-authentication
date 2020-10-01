import React from 'react';

import { Auth0ContextProps, Auth0ProviderProps } from './types';

const defaultValue: Auth0ContextProps = {};

export const Auth0Context = React.createContext(defaultValue);

export function Auth0Provider({ children }: Auth0ProviderProps) {
  return <Auth0Context.Provider value={{}}>{children}</Auth0Context.Provider>;
}
