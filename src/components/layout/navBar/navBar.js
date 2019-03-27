import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Vidly
        </Link>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navBarVidly"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navBarVidly">
          <ul className="navbar-nav mr-auto">
            <NavLink to="/movies" className="nav-item nav-link">
              Movies
            </NavLink>

            <NavLink to="/customers" className="nav-item nav-link">
              Customers
            </NavLink>

            <NavLink to="/rentals" className="nav-item nav-link">
              Rentals
            </NavLink>
          </ul>

          <ul className="navbar-nav ml-auto">
            <NavLink to="/login" className="nav-item nav-link">
              <i className="fas fa-lock" /> Login
            </NavLink>

            <NavLink to="/register" className="nav-item nav-link">
              <i className="fas fa-user" /> Register
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
