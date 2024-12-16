import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/UserContext";

function NavBar() {

  const {isAuthenticated} = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React Basics Demo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lists">
                  Lists
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/props">
                  Props
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hooks">
                  Hooks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              {
                isAuthenticated && 
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
