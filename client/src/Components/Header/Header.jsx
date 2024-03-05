import React from "react";
import logo from "../../Assets/logo1.png";
import "../../index.css";

const Header = () => {
  return (
    <section className="section_container">
      <nav className="navbar p-0 navbar-expand-lg   ">
        <div className="container  section_container">
          <a className="navbar-brand " href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end  fw-semibold"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item align-items-center d-flex">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item align-items-center d-flex">
                <a className="nav-link " href="#">
                  How it Workes
                </a>
              </li>
              <li className="nav-item lign-items-center ">
                <a className="nav-link" href="#">
                  <button className="btn btn-primary fw-bold px-5 action_btn  ">
                    SIGN IN{" "}
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
