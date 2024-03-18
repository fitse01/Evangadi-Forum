// import React from "react";
import logo from "../../Assets/logo1.png";
import "../../index.css";


import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppState } from "../../App";
// import evangadiLogo from "../../Images/evangadi-logo-header.png";
import { AiOutlineMenu } from "react-icons/ai";
// import classes from './header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user,setuser } = useContext(AppState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      navigate("/");
    }
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



<nav class="navbar p-3 navbar-expand-lg ">
  <div class="container   section_container">
    <a class="navbar-brand" href="#"><img src={logo} alt="evangadi-logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end fw-semibold " id="navbarNav">
      <ul class="navbar-nav"> 
        <li class="nav-item align-items-center d-flex">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li> 
        <li class="nav-item align-items-center d-flex"> 
          <a class="nav-link" href="#">How It Works </a>
        </li>
        <li class="nav-item align-items-center d-flex">
          <a class="nav-link" href="#">
          {isLoggedIn ? (
                <button className="btn btn-primary fw-bold px-5 action_btn" onClick={handleButtonClick}>Logout</button>
              ) : (
                <button className="btn btn-primary fw-bold px-5 action-btn" onClick={handleButtonClick}>Sign In</button>
              )}
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </section>
  );
}

export default Header;
