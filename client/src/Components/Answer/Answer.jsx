import React from "react";
import Header from "../Header/Header";
import { PiUserCircleDuotone } from "react-icons/pi";
// import { FaAngleRight } from "react-icons/fa6";

const Answer = () => {
  return (
    <section>
      <Header />
      <div className="landing bg-body-tertiary  pt-3">
        <div className="container   pt-3">
          {/* Question answer title and   answer */}
          <div className="">
            {/* top part */}
            <span className="fw-semibold fs-2 ">Question</span> <br />
            <span className="fw-semibold fs-5">What is react-router-dom</span>
            <span>
              <p>how does it work </p>
            </span>
          </div>

          <div>
            <hr />
            <span className="fw-semibold fs-3">Answer from the Community</span>
            {/* <hr /> */}
          </div>
          <div>
            <a href="#" className="text-decoration-none text-black">
              <hr />
              {/* user and arow container */}
              <div className="d-flex justify-content-between">
                <div className="d-md-flex align-items-center">
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
                {/* <div className="align-items-center">
                </div> */}
              </div>
            </a>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center container  shadow-sm p-2 mb-5 bg-body rounded">
          <div className="mt-5 pt-4">
            {/* Ask Q Part */}
            <div>
              <h3>Answer the Top Question </h3>
            </div>
            <div className="align-items-center mt-2">
              <p>Go to Question page</p>
            </div>
          </div>

          <div className="container">
            {/* form part */}
            <form action="" className="">
              <div cla>
                <input
                  type="text"
                  placeholder="Your Answer "
                  className="form-control py-5  "
                />
                {/* <textarea
                  class="form-control p-4"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Question Description "
                ></textarea> */}
              </div>
              <div className=" mt-2">
                <button
                  className="btn btn-primary fw-bold px-5 action_btn"
                  type="Submit"
                >
                  Post your Answer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Answer;
