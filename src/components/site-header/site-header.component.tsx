import React from 'react';
import { Link } from 'react-router-dom';
import { Auth0Context } from '../../contexts/auth0.context';

export default function SiteHeader() {
  const { isAuthenticated, login, logout } = React.useContext(Auth0Context);

  return (
    <div className="site-header">
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        {!isAuthenticated ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  );
}
