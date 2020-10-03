import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0Context } from '../../contexts/auth0.context';

export default function SiteHeader() {
  const {
    error,
    isAuthenticated,
    getTokenSilently,
    login,
    logout,
  } = useAuth0Context();

  return (
    <>
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
      {error !== '' && <div>{error}</div>}
      <button
        onClick={async () => {
          const token = await getTokenSilently();
          alert(token);
        }}
        style={{ marginTop: '3rem' }}
      >
        token
      </button>
    </>
  );
}
