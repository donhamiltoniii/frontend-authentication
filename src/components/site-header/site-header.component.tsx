import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <div className="site-header">
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <button>Login</button>
        <button>Logout</button>
      </div>
    </div>
  );
}
