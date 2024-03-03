import React from "react";
import logo from "../../Assets/logo1.png";
import "../../index.css";

const Header = () => {
  return (
    <section class="section_container">
      <nav class="navbar p-0 navbar-expand-lg   ">
        <div class="container  section_container">
          <a class="navbar-brand " href="#">
            <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end  fw-semibold"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item align-items-center d-flex">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item align-items-center d-flex">
                <a class="nav-link " href="#">
                  How it Workes
                </a>
              </li>
              <li class="nav-item lign-items-center ">
                <a class="nav-link" href="#">
                  <button class="btn btn-primary fw-bold px-5 action_btn  ">
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
