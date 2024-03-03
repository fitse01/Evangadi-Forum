import React from "react";

const SignUp = () => {
  return (
    <div className="col card mt-3 p-4 text-center">
      <div>
        <h4 className="m-3"> Join the network</h4>
        <p className="mb-2">
          Already have an account?
          <a href="" className="fw-semibold text-decoration-none text-warning">
            Sign in
          </a>
        </p>
      </div>
      <form action="">
        <div className="d-flex flex-column gap-3">

        <input
            type="text"
            placeholder="UserName"
            className="form-control p-3"
          />
          
          <div className="d-flex">
            <input
              type="text"
              placeholder="FirstName"
              className="form-control"
            />

            <input
              type="text"
              placeholder="LastName"
              className="form-control"
            />
          </div>

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
          <p className="mb-2">
            I agree to the{" "}
            <a
              href=""
              className="fw-semibold text-decoration-none text-warning"
            >
              privacy policy
            </a>{" "}
            and
            <a
              href=""
              className="fw-semibold text-decoration-none text-warning"
            >
              terms of service
            </a>
          </p>
        </div>

        <div className="d-grid mt-2">
          <button
            className="btn btn-primary fw-bold px-5 action_btn "
            type="submit"
          >
            Agree and Join
          </button>
        </div>

        <div className="">
          <a
            href=""
            className="fw-semibold text-decoration-none text-warning  mb-2"
          >
            Already have an account?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
