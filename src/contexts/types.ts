export interface Auth0ContextProps {
  error: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  getTokenSilently: (...props: any) => void;
  login: (...props: any) => void;
  logout: (...props: any) => void;
  updateError: (message: string) => void;
}

export interface Auth0ProviderProps {
  children: React.ReactNode;
}
