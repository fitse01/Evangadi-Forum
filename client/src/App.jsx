import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import axios from "./axiosConfig";
import Header from "./Components/Header/Header";
import LandingLayout from "./pages/LandingLayout/LandingLayout";

export const AppState = createContext();

function App() {
  const [user, setuser] = useState({});

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        header: {
          Authorization: "Bearer" + token,
        },
      });
      setuser(data);
      // console.log(data)
    } catch (error) {
      navigate("/login");
      console.log(error.response);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    // <AppState.Provider value={{ user, setuser }}>
    //   {/* // <div className="App"> */}
    //   <Routes>
    //     <Route path="/" element={<Header/>} />
    //     {/* <Route path="/" element={<Home />} /> */}
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //   </Routes>
    //   {/* // </div> */}
    // </AppState.Provider>
    <LandingLayout/>
  );
}

export default App;
