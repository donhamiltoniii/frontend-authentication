import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth0Context } from '../../contexts/auth0.context';

interface PrivateRouteProps {
  children: React.ReactNode;
  path: string;
}

export default function PrivateRoute({
  children,
  ...props
}: PrivateRouteProps) {
  const { isAuthenticated, updateError, user } = useAuth0Context();

  if (!isAuthenticated && !user) {
    updateError('You must be logged in to access the dashboard');
    return <Redirect to={'/'} />;
  }
  return <Route {...props}>{children}</Route>;
}
