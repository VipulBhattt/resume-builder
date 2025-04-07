import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top playfair-display-font">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <strong>Resume Builder</strong>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/personalInfo">
                Personal Info
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#interests">
                Interests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#awards">
                Awards
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
