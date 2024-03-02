import { useRef } from "react";
import axios from "../axiosConfig";
import { Link , useNavigate} from'react-router-dom';

function Register() {
  const Navigate = useNavigate();
  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = usernameDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;
    if (!usernameValue || !firstValue || !lastValue || !emailValue || !passValue) {
      alert("please provide all required information ");
      return;
    }

    // so let us send request to the database
    try {
      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstValue,
        lastname: lastValue,
        email: emailValue,
        password: passValue,
      });
      alert("register successfull. please login ");

      Navigate('/login')
    } catch (error) {
      console.log(error.message);
    }
    // to check if it  accept
    // console.log(usernameDom.current.value);
    // console.log(firstnameDom.current.value);
    // console.log(lastnameDom.current.value);
    // console.log(emailDom.current.value);
    // console.log(passwordDom.current.value);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>UserName :</span>
          <input type="text" ref={usernameDom} placeholder="username" />
          <br />
          <br />
        </div>

        <div>
          <span>First Name:</span>
          <input type="text" ref={firstnameDom} placeholder="firstname" />
          <br />
          <br />
        </div>

        <div>
          <span>Last Name:</span>
          <input type="text" ref={lastnameDom} placeholder="lastname" />
          <br />
          <br />
        </div>

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

        <input type="Submit" value="Register" />
      </form>
      <Link to = {'/login'} > Login </Link>
    </section>
  );
}

export default Register;
