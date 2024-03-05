import { useRef } from "react";
import axios from "../axiosConfig";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;
    if (!emailValue || !passValue) {
      alert("please provide all required information ");
      return
    }

    // so let us send request to the database
    try {
      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passValue,
      });
      alert("login successfull.  ");
      localStorage.setItem("token", data.token);
      
      console.log(data);
      // const response= await axios.post("/users/login", {
      //   email: emailValue,
      //   password: passValue,
      // });
      // alert("login successfull.  ");
      // console.log(response)

      navigate("/");
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Email:</span>
          <input type="email" ref={emailDom} placeholder="email" />
          <br />
          <br />
        </div>

        <div>
          <span>Password:</span>
          <input type="password" ref={passwordDom} placeholder="password" />
          <br />
          <br />
        </div>

        <input type="Submit" value="Login" />
      </form>

  <Link to = {'/register'}> Register </Link>
    </section>
  );
}

export default Login;
