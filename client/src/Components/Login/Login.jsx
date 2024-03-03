import React from "react";

const Login = ({setCurrentPage}) => {
  return (
    <div className="col card mt-3 p-4 text-center">
      <div>
        <h4 className="m-3"> Login to your account </h4>
        <p className="mb-2">
          Don’t have an account?{" "}
          <a href="" onClick={()=>setCurrentPage ("signup")} className="fw-semibold text-decoration-none text-warning">
            Create a new account
          </a>
        </p>
      </div>
      <form action="">
        <div className="d-flex flex-column gap-3">
          <input
            type="email"
            placeholder="Email Address"
            className="form-control p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control p-3"
          />
        </div>

        <div className="mt-3">
          <a
            href=""
            className="text-decoration-none text-warning d-flex justify-content-end"
          >
            Forgot Password
          </a>
        </div>

        <div className="d-grid mt-2">
          <button
            className="btn btn-primary fw-bold px-5 action_btn "
            type="submit"
            
          >
            Login
          </button>
        </div>
      </form>
    </div>

    // <div >
    //     <h1>The form </h1>
    //   </div>
  );
};

export default Login;
