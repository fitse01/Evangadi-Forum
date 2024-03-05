import React from "react";
import "../../index.css";
import Header from "../Header/Header";

const AskQuestion = () => {
  return (
    <section>
      <Header />
      <div className="container d-flex flex-column align-items-center mt-4 ">
        {/* steps and how to write Q  */}
        <div className="justify-content-around ">
          {/*  how to write Q  Title*/}
          <h2>Steps to Write a good questions </h2>
        </div>

        <div>
          {/*step to write Q  */}
          <ul>
            <li> Summarise you problem in one-line title</li>
            <li> Describe your problem in more detail</li>
            <li>Describe what you tried and What you expected to happen </li>
            <li>Review your question and post it to the site </li>
          </ul>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center container  shadow-sm p-3 mb-5 bg-body rounded">
        <div className="mt-5 pt-4">
          {/* Ask Q Part */}
          <div>
            <h3>Ask a Public question </h3>
          </div>
          <div className="align-items-center">
            <p>Go to Question page</p>
          </div>
        </div>

        <div className="container">
          {/* form part */}
          <form action="" className="">
            <div className="mb-2">
              <input
                type="text"
                placeholder="Title"
                className="form-control "
              />
            </div>
            <div cla>
              {/* <input
              type="text"
              placeholder="Question Description "
              className="form-control py-5  "
            /> */}
              <textarea
                class="form-control p-4"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Question Description "
              ></textarea>
            </div>
            <div className=" mt-2">
              <button
                className="btn btn-primary fw-bold px-5 action_btn"
                type="Submit"
              >
                Post your Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;
