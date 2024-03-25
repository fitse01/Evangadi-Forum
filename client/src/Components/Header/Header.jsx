import logo from "../../Assets/logo1.png";
import "../../index.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppState } from "../../App";
import { AiOutlineMenu } from "react-icons/ai";

function Header({ setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setuser } = useContext(AppState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      navigate("/");
    }

    // Add the logic to set the currentPage state after the conditional check
    setCurrentPage("login");
  };

  const logout = () => {
    setuser(null);
    localStorage.setItem("token", "");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setuser({});
      setIsLoggedIn(true);
    } else {
      setuser(null);
      setIsLoggedIn(false);
    }
  }, [setuser]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="section_container">
  <nav className="navbar p-3 navbar-expand-lg">
  <div className="container section_container">
    <a className="navbar-brand logo" href="#">
      <img className="evaLogo" src={logo} alt="evangadi-logo" />
    </a>
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
    <div
      className="collapse navbar-collapse justify-content-end fw-semibold"
      id="navbarNav"
    >
      <ul className="navbar-nav ml-auto"> {/* Add 'ml-auto' class to align items to the right */}
        <li className="nav-item align-items-center d-flex">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item align-items-center d-flex">
          <a className="nav-link" href="#">
            How It Works
          </a>
        </li>
        <li className="nav-item align-items-center d-flex">
          <a className="nav-link" href="#">
            {isLoggedIn ? (
              <button
                className="btn btn-primary fw-bold px-5 action_btn"
                onClick={handleButtonClick}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-primary fw-bold px-5 action-btn"
                onClick={handleButtonClick}
              >
                Sign In
              </button>
            )}
          </a>
        </li>
      </ul>
      <style>
        {`
          .navbar-nav.ml-auto {
            margin-left: auto;
          }
        `}
      </style>
    </div>
  </div>
</nav>
    </section>
  );
}

export default Header;
