import React from "react";
import Header from "../../Components/Header/Header";
import "../../index.css";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <Header />
      <section className=" bg-body-tertiary">
        <div className="d-flex justify-content-around pt-5  ">
          <button className="btn btn-primary action_btn px-5">
            Ask Question
          </button>

          <p className="fw-semibold">
            <span className="text-warning">Welcome </span>Fitsum Tafese
          </p>
        </div>

        <div className="container">
          <h2>Question</h2>
          <a href="#" className="text-decoration-none text-black">
            <hr />
            {/* user and arow container */}
            <div className="d-flex justify-content-between">
              <div>
                {/* user and question  */}
                <div className="user">
                  {/* user */}
                  <div>
                    <PiUserCircleDuotone />
                  </div>
                  <div>Fitsum </div>
                </div>
                <div>
                  {/* question  */}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat commodi officia sequi, delectus iusto illum non
                    reiciendis tempore!
                  </p>
                </div>
              </div>

              {/* arow */}
              <div>
                <FaAngleRight />
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
