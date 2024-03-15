

import { useContext, useState, useEffect } from "react";
import { AppState } from "../../App";
// import { BsPersonCircle } from "react-icons/bs";
// import { FaGreaterThan } from "react-icons/fa";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";

// import axios from '../axiosConfig'

function Home(props) {
  const navigate = useNavigate();
  const [load, setLoad] = useState(true);

  const { user } = useContext(AppState);
  const { question } = useContext(AppState);
  const [reloaded, setReloaded] = useState(false);

  const handleLinkClick = () => {
    if (!reloaded) {
      localStorage.setItem("reloaded", "true");
      setReloaded(true);
    }
  };

  return (
    <>
      <Header />
      <section className="bg-body-tertiary">
        <div className="d-flex justify-content-around pt-5 ">
          <button
            onClick={() => {
              localStorage.setItem("reloaded", "true");
              navigate("/questions");
            }}
            className="btn btn-primary fw-bold px-5 action_btn"
          >
            Ask Question
          </button>
          <p className="fw-semibold">
            <span className="text-warning">Welcome:</span> {user?.username}
          </p>
        </div>
        <div className="container mt-5">
          <h2>Questions</h2>

          {question.allquestion &&
            question.allquestion.map((item, index) => (
              <Link
                onClick={handleLinkClick}
                className="text-decoration-none text-black"
                key={index}
                to={`/answer?title=${encodeURIComponent(
                  item.title
                )}&description=${encodeURIComponent(
                  item.description
                )}&questionid=${encodeURIComponent(
                  item.questionid
                )}&reload=true`}
              >
                <hr />
                <div className="d-flex justify-content-between align-items-center ">
                  <div class="d-flex flex-column flex-md-row gap-md-5">
                    <div className="d-flex flex-column gap-2">
                      {/* user */}
                      <div
                        className="user-icon"
                        style={{
                          width: "100px",
                          height: "100px",
                          size: "100px",
                        }}
                      >
                        {/* <BsPersonCircle /> */}
                        <PiUserCircleDuotone style={{ fontSize: "100px" }} />
                      </div>
                      <div>{item.username}</div>
                    </div>
                    <div className="">
                      {/* question */}
                      <p className="text-start mt-4">{item.title}</p>
                    </div>
                  </div>

                  <div>
                    {/* arrow */}
                    {/* <FaGreaterThan /> */}
                    <FaAngleRight />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}

export default Home;
