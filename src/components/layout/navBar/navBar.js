import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
      <div className="container">
        <a href="#!" className="navbar-brand">
          Vidly
        </a>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navBarVidly"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navBarVidly">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#!" className="nav-link">
                Movies
              </a>
            </li>

            <li className="nav-item">
              <a href="#!" className="nav-link">
                Customers
              </a>
            </li>

            <li className="nav-item">
              <a href="#!" className="nav-link">
                Rentals
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
