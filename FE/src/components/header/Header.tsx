import { AuthContext, AuthContextType } from '@/contexts/UserContext';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
  const Header = () => {
    const { user, logout } = useContext(AuthContext) as AuthContextType;
  return (
  <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
        </a>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to={`/`} className="nav-link px-4 text-secondary">Home</Link></li>
          <li><a href="#" className="nav-link px-4 text-white">List</a></li>
          <li><Link to={`/about`} className="nav-link px-4 text-white">About</Link></li>
          <li><a href="/admin" className="nav-link px-4 text-white">Admin</a></li>
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>
        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
        {user ? (
          <>
            <li>
              <span>Welcome, {user?.email}</span>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            <li>
              <Link to="/admin">You are admin?</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
              {"/"}
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </div>
    </div>
  </header>
  )
  };
  export default Header;