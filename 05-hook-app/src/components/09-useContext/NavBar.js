import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">

            <Link to="/" className="navbar-brand" >useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink to="/"className="nav-item nav-link "
                {...(navData) => navData.isActive && "active"}>Home</NavLink>
            <NavLink to="/about"className="nav-item nav-link "
                {...(navData) => navData.isActive && "active"}>About</NavLink>
            <NavLink to="/login"className="nav-item nav-link "
                {...(navData) => navData.isActive && "active"}>Login</NavLink>

            </div>
            </div>
        </div>
    </nav>
    );
};
