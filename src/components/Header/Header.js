import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import {
  RiHome2Line,
  RiLoginCircleLine,
  RiAddCircleLine,
} from "react-icons/ri";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg fixed-top ${styles.header}`}>
        <div className="container-fluid">
          <img src={logo} alt="Homemaid-logo" className={styles.logo} />

          <Link className={`navbar-brand ${styles.appName}`} to="/">
            Taskly
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles.navLink}`}
                  aria-current="page"
                  to="/"
                >
                  <RiHome2Line className="me-1" /> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${styles.navLink}`}
                  aria-current="page"
                  to="/dashboard"
                >
                  <RiHome2Line className="me-1" /> Dashboard
                </Link>
              </li>


              <li className="nav-item">
                <Link to="/signin">
                  <button
                    className={`btn btn-outline-success ${styles.loginButton}`}
                  >
                    <RiLoginCircleLine className="me-1" /> Login
                  </button>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/signup">
                  <button
                    className={`btn btn-outline-success ${styles.loginButton}`}
                  >
                    <RiAddCircleLine className="me-1" /> Register
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
