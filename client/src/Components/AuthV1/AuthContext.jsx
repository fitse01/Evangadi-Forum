import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { endPoint, axiosInstance } from "../../endPoint/api";
// import { axiosInstance } from "../../endPoint/api";

const initialstate = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialstate);

  // used to send request to the backend and check if the user is authenticated or not
  useEffect(() => {
    // write a function that check authentication
    const checkAuthentication = async () => {
      const Token = Cookie.get("token ");

      // if error you get fitse check  here  ME   'endPoint.ME',
      if (Token) {
        try {
          const response = await axiosInstance.get(endPoint.ME, {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          });

          // if any ERROR get fitse check here  this   payload :response.data?.user
          if (response.status === 200) {
            dispatch({
              type: "SET_USER",
              payload: response.data?.user,
            });
          }
        } catch (error) {
          console.log("Authentication Error", error);
          dispatch({
            type: "LOGOUT",
          });
          navigate("/");
        }
      } else {
        dispatch({
          type: "LOGOUT",
        });
        navigate("/");
      }
    };
    checkAuthentication();
  }, [navigate]);

  const logout = () => {
    Cookie.remove("token");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post(endPoint.LOGIN, {
        email,
        password,
      });
      if (response.status === 200) {
        const { token, user } = response.data;
        Cookie.set("token", token);

        // if error happened while loging in check here  'payload :response.data?.user' maybe should be payload :response.data?data?.user
        dispatch({ type: "SET_USER", payload: response.data?.user });
      }
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ state, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
