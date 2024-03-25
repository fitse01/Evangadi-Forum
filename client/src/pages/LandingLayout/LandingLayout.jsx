import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import bg from "../../Assets/bg.jpg";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";

const LandingLayout = () => {
  const [currentPage, setCurrentPage] = useState("signup");
  return (
    <section >
      <Header setCurrentPage={setCurrentPage}/>
      <main
        className="bg-body-tertiary "
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="container d-md-flex pt-5 gap-5">
          {/* form  */}
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}

          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}

          {/* {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )} */}
          {/* <Login /> */}

          {/* message */}
          <div className="col ">
            <p className="text-warning  fw-semibold">About</p>
            <h1 className="fw-bold">Evangadi Networks Q&A</h1>
            <div className="d-flex flex-column gap-4">
              <p>
                No matter what stage of life you are in, whether you’re just
                starting elementary school or being promoted to CEO of a Fortune
                500 company, you have much to offer to those who are trying to
                follow in your footsteps.
              </p>
              <p>
                Wheather you are willing to share your knowledge or you are just
                looking to meet mentors of your own, please start by joining the
                network here.
              </p>
            </div>
            <button
              className="px-5 py-2 fw-bold mt-3"
              style={{
                backgroundColor: "rgb(255,133,0)",
                color: "white",
                border: "5px",
                borderRadius: "5px",
              }}
            >
              How It Works
            </button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default LandingLayout;
