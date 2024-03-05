import React from "react";
import Header from "../../Components/Header/Header";
import "../../index.css";
import Question from "../../Components/Question/Question";
import AskQuestion from "../../Components/AskQuestion/AskQuestion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate =useNavigate();

  const handleAskQuestionClick = () => {
    navigate('/questions'); // Navigates to the "/questions" route
  };
 
  return (
    <>
      <Header />
      <section className=" bg-body-tertiary">
        <div className="d-flex justify-content-around pt-5  ">
          <a href="#"  onClick={handleAskQuestionClick} className="btn btn-primary action_btn px-5">
            {" "}
            Ask Question{" "}
          </a>
          {/* <button className="btn btn-primary action_btn px-5">
            Ask Question
          </button> */}

          <p className="fw-semibold">
            <span className="text-warning">Welcome </span>Fitsum Tafese
          </p>
        </div>

        <div className="container mt-5">
          <h2>Question</h2>
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
      </section>
    </>
  );
};

export default Home;
