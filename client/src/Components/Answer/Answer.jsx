import React, { useRef, useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../axiosConfig.js";
import { AppState } from "../../App.jsx";
import Header from "../Header/Header";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";

const Answer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Parse the query string to extract the title and description
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  const description = queryParams.get("description");

  const questionid = queryParams.get("questionid");
  

  const { user } = useContext(AppState);
  // console.log(user, "sdfghjklkjhgfdfghjkl")

  //  console.log(questionid,user.userid)

  const [data, setData] = useState({});

  const token = localStorage.getItem("token");

  const answerDom = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const answerValue = answerDom.current.value;
    const userid = user.userid;

    if (!questionid || !userid || !answerValue) {
      alert("please provide all required fields");
      return;
    }

    try {
      await axios.post(
        "/answers/postanswers",
        {
          userid: userid,
          questionid: questionid,

          answer: answerValue,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      answerDom.current.value = "";

      alert("answer posted succesfully");
      window.location.reload();
    } catch (error) {
      alert(" something went wrong");
      console.log(error.response);
    }
  }
  async function getAnswer() {
    try {
      const response = await axios.get("/answers/all-answers", {
        headers: {
          Authorization: "Bearer " + token,
          questionid: questionid,
        },
      });
      //  console.log(questionid)

      // console.log(response.data); // Log the response data
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  // useEffect(() => {
  //   getAnswer();
  // }, []);
  useEffect(() => {
    if (queryParams.get('reload') === 'true' && localStorage.getItem('reloaded') === 'true') {
      localStorage.removeItem('reloaded');
      window.location.reload();
    }
    getAnswer();
     }, []);


  return (
    <section className="mb-4">
      <Header />
      <div className="landing bg-body-tertiary  pt-3">
        <div className="container   pt-3">
          {/* Question answer title and   answer */}
          <div className="">
            {/* top part */}
            <span className="fw-semibold fs-2 ">Question</span> <br />
            {/* <span className="fw-semibold fs-5">What is react-router-dom</span> */}
            <span className="fw-semibold fs-5">{title}</span>
            <span>
              <p>{description} </p>
              {/* <p>how does it work </p> */}
            </span>
          </div>

          <div>
            <hr />
            <span className="fw-semibold fs-3">Answer from the Community</span>
            {/* <hr /> */}
          </div>

          <div>
            {data.allanswer &&
              data.allanswer.map((item, index) => (
                <a
                  href="#"
                  key={index}
                  className="text-decoration-none text-black"
                >
                  <hr />
                  {/* user and arow container */}
                  <div className="d-flex justify-content-between">
                    <div className="d-md-flex align-items-center">
                      {/* user and question  */}
                      <div className="user">
                        {/* user */}
                        <div>
                          <PiUserCircleDuotone size={100} />
                        </div>
                        {/* <div>Fitsum </div> */}
                        <div>{item.username}</div>
                      </div>
                      <div>
                        <p>{item.answer}</p>
                      </div>
                    </div>

                    {/* arow */}
                    {/* <div className="align-items-center">
                </div> */}
                  </div>
                </a>
              ))}
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
            <form action="" className="" onSubmit={handleSubmit}>
              <div>
                <textarea
                  class="form-control p-4"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Answer"
                  ref={answerDom}
                ></textarea>
              </div>

              <div className=" mt-2 mb-5 pb-4">
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


