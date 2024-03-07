import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import "../../index.css";
import Question from "../../Components/Question/Question";
import AskQuestion from "../../Components/AskQuestion/AskQuestion";
import { useNavigate , Link } from "react-router-dom";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { AppState } from "../../App";

const Home = () => {
  const { user, question } = useContext(AppState);
  console.log(question);
  console.log(user);

  const navigate = useNavigate();
  const handleAnswerClick = () => {
    navigate("/answer"); // Navigates to the "/answer" route
  };

  const handleAskQuestionClick = () => {
    navigate("/questions"); // Navigates to the "/questions" route
  };

  return (
    <>
      <Header />
      <section className=" bg-body-tertiary">
        <div className="d-flex justify-content-around pt-5  ">
          <a
            href="#"
            onClick={handleAskQuestionClick}
            className="btn btn-primary action_btn px-5"
          >
           
            Ask Question
          </a>
          {/* <button className="btn btn-primary action_btn px-5">
            Ask Question
          </button> */}

          <p className="fw-semibold">
            <span className="text-warning">Welcome </span>{user.username}
          </p>
        </div>

        <div className="container mt-5">
          <h2>Question</h2>

          {question.allquestion &&
            question.allquestion.map((item, index) => (
            // <a
            
            //     href="#"
            //     className="text-decoration-none text-black"
            //     onClick={handleAnswerClick}
            //   >
            //     <hr />
            //     {/* user and arow container */}
            //     <div className="d-flex justify-content-between">
            //       <div className="d-md-flex align-items-center">
            //         {/* user and question  */}
            //         <div className="user">
            //           {/* user */}
            //           <div>
            //             <PiUserCircleDuotone />
            //           </div>
            //           <div>{item.username} </div>
            //         </div>
            //         <div>
            //           {/* question  */}
            //           <p>{item.title}</p>
            //         </div>
            //       </div>

            //       {/* arow */}
            //       <div className="align-items-center">
            //         <FaAngleRight />
            //       </div>
            //     </div>
            //   </a>
            <Link
              className="text-decoration-none text-black"
              key={index}
              to={`/answer?title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}&questionid=${encodeURIComponent(item.questionid)}`}
            >
              <hr />
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex flex-column align-items-center gap-3">
                  {/* user */}
                  <div className="user-icon">
                    <PiUserCircleDuotone />
                  </div>
                  <div>{item.username}</div>
                </div>
                <div>
                  {/* question */}
                  <p>{item.title}</p>
                </div>
                <div>
                  {/* arrow */}
                  <FaAngleRight />
                </div>
              </div>
            </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
