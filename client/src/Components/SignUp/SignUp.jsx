// import { useState, useRef } from "react";
// import axios from "../../axiosConfig";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../../index.css";

// const SignUp = () => {
//   const notifySuccess = () => toast("Registration successful. Please login");
//   const notifyIncomplete = () => toast("Registration failed . Please provide full information");

//   const usernameDom = useRef();
//   const firstnameDom = useRef();
//   const lastnameDom = useRef();
//   const emailDom = useRef();
//   const passwordDom = useRef();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const usernameValue = usernameDom.current.value;
//     const firstValue = firstnameDom.current.value;
//     const lastValue = lastnameDom.current.value;
//     const emailValue = emailDom.current.value;
//     const passValue = passwordDom.current.value;

//     if (
//       !usernameValue ||
//       !firstValue ||
//       !lastValue ||
//       !emailValue ||
//       !passValue ||
//       passValue.length < 8
//     ) {
//       notifyIncomplete();
//       return;
//     }

//     try {
//       await axios.post("/users/register", {
//         username: usernameValue,
//         firstname: firstValue,
//         lastname: lastValue,
//         email: emailValue,
//         password: passValue,
//       });
//       notifySuccess();
//     } catch (error) {
//       console.log(error.message);
//       toast.error("Registration failed. Please try again.");
//     }
//   }

//   return (
//     <div className="col card mt-3 p-4 text-center">
//       <div>
//         <h4 className="m-3"> Join the network</h4>
//         <p className="mb-2">
//           Already have an account?
//           <Link
//             to="/login"
//             className="fw-semibold text-decoration-none text-warning"
//           >
//             Sign in
//           </Link>
//         </p>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="d-flex flex-column gap-3">
//           <input
//             type="text"
//             ref={usernameDom}
//             placeholder="Username"
//             className="form-control p-3"
//           />

//           <div className="d-flex firstLastNaame">
//             <input
//               type="text"
//               ref={firstnameDom}
//               placeholder="First Name"
//               className="form-control"
//             />

//             <input
//               type="text"
//               ref={lastnameDom}
//               placeholder="Last Name"
//               className="form-control"
//             />
//           </div>

//           <input
//             type="email"
//             ref={emailDom}
//             placeholder="Email Address"
//             className="form-control p-3"
//           />

//           <input
//             type="password"
//             ref={passwordDom}
//             placeholder="Password"
//             className={`form-control p-3 ${passwordDom.current && passwordDom.current.value.length < 8 ? "border border-danger" : ""}`}
//           />
//           {passwordDom.current && passwordDom.current.value.length < 8 && (
//             <p className="text-danger">Password must be at least 8 characters</p>
//           )}
//         </div>

//         <div className="mt-3">
//           <p className="mb-2">
//             I agree to the
//             <a
//               href=""
//               className="fw-semibold text-decoration-none text-warning"
//             >
//               privacy policy
//             </a>
//             and
//             <a
//               href=""
//               className="fw-semibold text-decoration-none text-warning"
//             >
//               terms ofservice
//             </a>
//           </p>
//         </div>

//         <div className="d-grid mt-2">
//           <button
//             className="btn btn-primary fw-bold px-5 action_btn"
//             type="submit"
//           >
//             Agree and Join
//           </button>
//         </div>
//       </form>
//       <div className="">
//         <Link
//           to="/login"
//           className="fw-semibold text-decoration-none text-warning mb-2"
//         >
//           Already have an account?
//         </Link>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUp;

// import { useState, useRef } from "react";
// import axios from "../../axiosConfig";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../../index.css";

// const SignUp = () => {
//   const notifySuccess = () => toast("Registration successful. Please login");
//   const notifyIncomplete = () => toast("Registration failed. Please provide full information");

//   const usernameDom = useRef();
//   const firstnameDom = useRef();
//   const lastnameDom = useRef();
//   const emailDom = useRef();
//   const passwordDom = useRef();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const usernameValue = usernameDom.current.value;
//     const firstValue = firstnameDom.current.value;
//     const lastValue = lastnameDom.current.value;
//     const emailValue = emailDom.current.value;
//     const passValue = passwordDom.current.value;

//     if (
//       !usernameValue ||
//       !firstValue ||
//       !lastValue ||
//       !emailValue ||
//       !passValue ||
//       passValue.length < 8
//     ) {
//       notifyIncomplete();
//       return;
//     }

//     try {
//       await axios.post("/users/register", {
//         username: usernameValue,
//         firstname: firstValue,
//         lastname: lastValue,
//         email: emailValue,
//         password: passValue,
//       });
//       notifySuccess();
//     } catch (error) {
//       console.log(error.message);
//       toast.error("Registration failed. Please try again.");
//     }
//   }

//   return (
//     <div className="col card mt-3 p-4 text-center">
//       <div>
//         <h4 className="m-3"> Join the network</h4>
//         <p className="mb-2">
//           Already have an account?
//           <Link
//             to="/login"
//             className="fw-semibold text-decoration-none text-warning"
//           >
//             Sign in
//           </Link>
//         </p>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="d-flex flex-column gap-3">
//           <input
//             type="text"
//             ref={usernameDom}
//             placeholder="Username"
//             className="form-control p-3"
//           />

//           <div className="d-flex firstLastNaame">
//             <input
//               type="text"
//               ref={firstnameDom}
//               placeholder="First Name"
//               className="form-control"
//             />

//             <input
//               type="text"
//               ref={lastnameDom}
//               placeholder="Last Name"
//               className="form-control"
//             />
//           </div>

//           <input
//             type="email"
//             ref={emailDom}
//             placeholder="Email Address"
//             className="form-control p-3"
//           />
// <input
//   type="password"
//   ref={passwordDom}
//   placeholder="Password"
//   className={`form-control p-3 ${passwordDom.current?.value.length < 8 ? "border border-danger" : ""}`}
// />
// {passwordDom.current?.value.length < 8 && (
//   <p className="text-danger">Password must be at least 8 characters</p>
// )}     </div>

//         <div className="mt-3">
//           <p className="mb-2">
//             I agree to the
//             <a
//               href=""
//               className="fw-semibold text-decoration-none text-warning"
//             >
//               privacy policy
//             </a>
//             and
//             <a
//               href=""
//               className="fw-semibold text-decoration-none text-warning"
//             >
//               terms ofservice
//             </a>
//           </p>
//         </div>

//         <div className="d-grid mt-2">
//           <button
//             className="btn btn-primary fw-bold px-5 action_btn"
//             type="submit"
//           >
//             Agree and Join
//           </button>
//         </div>
//       </form>
//       <div className="">
//         <Link
//           to="/login"
//           className="fw-semibold text-decoration-none text-warning mb-2"
//         >
//           Already have an account?
//         </Link>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUp;

import { useState, useRef } from "react";
import axios from "../../axiosConfig";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../index.css";

const SignUp = ({ setCurrentPage }) => {
  const notifySuccess = () => toast("Registration successful. Please login");
  const notifyIncomplete = () =>
    toast("Registration failed. Please provide full information");

  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();
  const [passwordError, setPasswordError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = usernameDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (
      !usernameValue ||
      !firstValue ||
      !lastValue ||
      !emailValue ||
      !passValue
    ) {
      notifyIncomplete();
      return;
    }

    if (passValue.length < 8) {
      setPasswordError(true);
      return;
    }

    try {
      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstValue,
        lastname: lastValue,
        email: emailValue,
        password: passValue,
      });
      notifySuccess();
    } catch (error) {
      console.log(error.message);
      toast.error("Registration failed. Please try again.");
    }

    // Reset passwordError state
    setPasswordError(false);
  }

  return (
    <div className="col card mt-3 p-4 text-center">
      <div>
        <h4 className="m-3"> Join the network</h4>
        <p className="mb-2">
          Already have an account?
          <Link
            to="/login"
            className="fw-semibold text-decoration-none text-warning"
            onClick={() => setCurrentPage("login")}
          >
            Sign in
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column gap-3">
          <input
            type="text"
            ref={usernameDom}
            placeholder="Username"
            className="form-control p-3"
          />

          <div className="d-flex firstLastNaame">
            <input
              type="text"
              ref={firstnameDom}
              placeholder="First Name"
              className="form-control"
            />

            <input
              type="text"
              ref={lastnameDom}
              placeholder="Last Name"
              className="form-control"
            />
          </div>

          <input
            type="email"
            ref={emailDom}
            placeholder="Email Address"
            className="form-control p-3"
          />

          <input
            type="password"
            ref={passwordDom}
            placeholder="Password"
            className={`form-control p-3 ${
              passwordError ? "border border-danger" : ""
            }`}
          />
          {passwordError && (
            <p className="text-danger">
              Password must be at least 8 characters
            </p>
          )}
        </div>

        <div className="mt-3">
          <p className="mb-2">
            I agree to the
            <a
              href=""
              className="fw-semibold text-decoration-none text-warning"
            >
              privacy policy
            </a>
            and
            <a
              href=""
              className="fw-semibold text-decoration-none text-warning"
            >
              terms ofservice
            </a>
          </p>
        </div>

        <div className="d-grid mt-2">
          <button
            className="btn btn-primary fw-bold px-5 action_btn"
            type="submit"
          >
            Agree and Join
          </button>
        </div>
      </form>
      <div className="">
        <Link
          to="/login"
          className="fw-semibold text-decoration-none text-warning mb-2"
        >
          Already have an account?
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
