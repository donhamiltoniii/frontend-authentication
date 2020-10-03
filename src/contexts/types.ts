export interface Auth0ContextProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  login: (...props: any) => void;
  logout: (...props: any) => void;
}

export interface Auth0ProviderProps {
  children: React.ReactNode;
}
