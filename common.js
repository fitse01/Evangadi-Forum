// CREATTE TABLE





// CREATE TABLE users (
//   usersid INT(20) NOT NULL AUTO_INCREMENT,
//   username VARCHAR(20) NOT NULL,
//   firstname VARCHAR(20) NOT NULL,
//   lastname VARCHAR(20) NOT NULL,
//   email VARCHAR(40) NOT NULL,
//   password VARCHAR(100) NOT NULL,
//   PRIMARY KEY (usersid)
// );

// CREATE TABLE questions (
//   id INT(20) NOT NULL AUTO_INCREMENT,
//   questionid INT(20) NOT NULL UNIQUE,
//   usersid INT(20) NOT NULL,
//   title VARCHAR(50) NOT NULL,
//   description VARCHAR(200) NOT NULL,
//   tag VARCHAR(20),
//   PRIMARY KEY (id, questionid),
//   FOREIGN KEY (usersid) REFERENCES users(usersid)
// );

// CREATE TABLE answers (
//   answerid INT(20) NOT NULL AUTO_INCREMENT,
//   usersid INT(20) NOT NULL,
//   questionid INT(20) NOT NULL,
//   answer VARCHAR(200) NOT NULL,
//   PRIMARY KEY (answerid),
//   FOREIGN KEY (questionid) REFERENCES questions(questionid),
//   FOREIGN KEY (usersid) REFERENCES users(usersid)
// ); 









// code for answer CONTROLLER


// const dbConnection = require('../db/dbConfig')

// async function postAnswer(req,res){
//     const {userid,questionid,answer}=req.body;
//     if(!questionid || !userid || !answer){
//        return res.status(400).json({msg:"please provide all required fields"})
//     }
// //insert data into answers table
//  try {
//  await dbConnection.query("INSERT INTO answers (userid,questionid,answer) VALUES (?,?,?)",[userid,questionid,answer])
//  return res.status(201).json({msg:"answer posted"})
    
//  } catch (error) {
//     console.log(error.message)
//     return res.status(500).json({msg:"something went wrong, try again later"})
//  }

// }
// async function allAnswer(req,res){
//    // const questionid = req.query.questionid;
   
//    const questionId = req.headers['questionid'];
//    // console.log(questionId)
//     try {
      

//      const [allanswer] = await dbConnection.query(`SELECT users.username, answers.answer
//      FROM answers
//      JOIN users ON answers.userid = users.userid
//      WHERE answers.questionid = ?
//      `,[questionId])
//      return res.status(200).json({msg:"all answer retrieved succesfully",allanswer})
     

     
//     } catch (error) {
//      console.log(error.message)
//      return res.status(500).json({msg:"something went wrong, try again later"})
//     }
  
//   }


// module.exports = {postAnswer,allAnswer};









// // question controller

// const dbConnection = require("../db/dbConfig");

// const postQuestion = async (req, res) => {
//   const { questionid,userid, title, description, tag } = req.body;

//   // const userid = req.user.userid;
//   if (!questionid || !title || !description || !userid ||!tag) {
//     return res
//       .status(StatusCodes.BAD_REQUEST)
//       .json({ msg: "please provide all the information " });
//   }


//   try {
//     await dbConnection.query(
//       "INSERT INTO questions ( questionid,	userid	,title,	description,	tag )  VALUES(?,?,?,?,?)",
//       [questionid,	userid	,title,	description,	tag]
//     );
//     return res.status(StatusCodes.CREATED).json({ msg: "question posted" });


//   } catch (err) {
//     console.log(err.message);
//     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "something went wrong please try again" });
//   }
// };



// module.exports = {postQuestion};




// const dbConnection = require('../db/dbConfig')

// async function postQuestion(req,res){
//     const {questionid,userid,title,description,tag}=req.body;
//     if(!questionid || !userid || !title || !description ){
//        return res.status(400).json({msg:"please provide all required fields...."})
//     }

//  try {
//  await dbConnection.query("INSERT INTO questions (questionid,userid,title,description,tag) VALUES (?,?,?,?,?)",[questionid,userid,title,description,tag])
//  return res.status(201).json({msg:"question posted redirected to home"})
    
//  } catch (error) {
//     console.log(error.message)
//     return res.status(500).json({msg:"something went wrong, try again later"})
//  }

// }
// async function allQuestion(req,res){
    
//     try {
  
//       const [allquestion] = await dbConnection.query(`
//       SELECT q.questionid, q.userid, q.title, q.description, u.username
//       FROM questions q
//       JOIN users u ON q.userid = u.userid
//       ORDER BY q.id DESC
//   `);

 
//      return res.status(200).json({msg:"all question retrieved succesfully",allquestion})
     
//     } catch (error) {
//      console.log(error.message)
//      return res.status(500).json({msg:"something went wrong, try again later"})
//     }
  
//   }


// module.exports = {postQuestion,allQuestion};
// module.exports = {postQuestion};


























// ask question FRONTEND 



// import React, { useEffect, useState, useRef, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../index.css";
// import Header from "../Header/Header";

// import axios from "../../axiosConfig";
// import { v4 as uuidv4 } from "uuid";
// import { AppState } from "../../App";

// const AskQuestion = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AppState);
//   const token = localStorage.getItem("token");

//   const titleDom = useRef(null);
//   const descriptionDom = useRef(null);
//   const tagDom = useRef(null);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const titleValue = titleDom.current.value;
//     const descriptionValue = descriptionDom.current.value;
//     const tagValue = tagDom.current.value;
//     const questionid = uuidv4();
//     const userid = user.userid;
//     console.log(userid);

//     if (
//       !questionid ||
//       !userid ||
//       !titleValue ||
//       !descriptionValue ||
//       !tagValue
//     ) {
//       alert("please provide all required fields");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "/question/postquestions",
//         {
//           questionid: questionid,
//           userid: userid,
//           title: titleValue,
//           description: descriptionValue,
//           tag: tagValue,
//         },
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );
//       titleDom.current.value = "";
//       descriptionDom.current.value = "";
//       tagDom.current.value = "";
//       console.log(response, "response");

//       //  if(response.status==201){
//       //   setMessage(response.data.msg)
//       //  }
//       setTimeout(() => {
//         navigate("/");
//         window.location.reload();
//       }, 2000);
//     } catch (error) {
//       alert("something went wrong");
//       console.log(error.response);
//     }
//   }
//   return (
//     <section>
//       <Header />
//       <div className="container d-flex flex-column align-items-center mt-4 ">
//         {/* steps and how to write Q  */}
//         <div className="justify-content-around ">
//           {/*  how to write Q  Title*/}
//           <h2>Steps to Write a good questions </h2>
//         </div>

//         <div>
//           {/*step to write Q  */}
//           <ul>
//             <li> Summarise you problem in one-line title</li>
//             <li> Describe your problem in more detail</li>
//             <li>Describe what you tried and What you expected to happen </li>
//             <li>Review your question and post it to the site </li>
//           </ul>
//         </div>
//       </div>

//       <div className="d-flex flex-column align-items-center container  shadow-sm p-3 mb-5 bg-body rounded">
//         <div className="mt-5 pt-4">
//           {/* Ask Q Part */}
//           <div>
//             <h3>Ask a Public question </h3>
//           </div>
//           <div className="align-items-center">
//             <p>Go to Question page</p>
//           </div>
//         </div>

//         <div className="container">
//           {/* form part */}
//           <form action="" onSubmit={handleSubmit}>
//             <div className="mb-2">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 className="form-control "
//                 ref={titleDom}
//               />
//             </div>
//             <div cla>
//               {/* <input
//                 type="text"
//                 placeholder="Question Description "
//                 className="form-control py-5  "
//               /> */}
//               <textarea
//                 class="form-control p-4"
//                 id="exampleFormControlTextarea1"
//                 rows="3"
//                 placeholder="Question Description "
//                 ref={descriptionDom}
//               ></textarea>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 placeholder="tag"
//                 className="form-control mt-2 "
//                 ref={tagDom}
//               />
//             </div>
//             <div className=" mt-2">
//               <button
//                 className="btn btn-primary fw-bold px-5 action_btn"
//                 type="Submit"
//               >
//                 Post your Question
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AskQuestion;

















// AskQuestion PART2



// import React, { useRef, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../../index.css';
// import Header from '../Header/Header';

// import axios from '../../axiosConfig';
// import { v4 as uuidv4 } from 'uuid';
// import { AppState } from '../../App';

// const AskQuestion = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AppState);
//   console.log(user)
//   const token = localStorage.getItem('token');

//   const titleRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const tagRef = useRef(null);

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isSubmitting) {
//       return;
//     }

//     setIsSubmitting(true);

//     const title = titleRef.current.value;
//     const description = descriptionRef.current.value;
//     const tag = tagRef.current.value;
//     const questionid = uuidv4();
//     console.log(user)
//     const userid = user.userid;
//     console.log(userid);

//     if (!questionid || !userid || !title || !description || !tag) {
//       alert('Please provide all required fields');
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         '/question/postquestions',
//         {
//           questionid: questionid,
//           userid: userid,
//           title: title,
//           description: description,
//           tag: tag,
//         },
//         {
//           headers: {
//             Authorization: 'Bearer ' + token,
//           },
//         }
//       );
//       titleRef.current.value = '';
//       descriptionRef.current.value = '';
//       tagRef.current.value = '';
//       console.log(response, 'response');

//       setTimeout(() => {
//         navigate('/');
//         window.location.reload();
//       }, 2000);
//     } catch (error) {
//       alert('Something went wrong');
//       console.log(error.response);
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <section>
//       <Header />
//       <div className="container d-flex flex-column align-items-center mt-4 ">
//         {/* steps and how to write Q  */}
//         <div className="justify-content-around ">
//           {/*  how to write Q  Title*/}
//           <h2>Steps to Write a good questions </h2>
//         </div>

//         <div>
//           {/*step to write Q  */}
//           <ul>
//             <li> Summarise you problem in one-line title</li>
//             <li> Describe your problem in more detail</li>
//             <li>Describe what you tried and What you expected to happen </li>
//             <li>Review your question and post it to the site </li>
//           </ul>
//         </div>
//       </div>

//       <div className="d-flex flex-column align-items-center container  shadow-sm p-3 mb-5 bg-body rounded">
//         <div className="mt-5 pt-4">
//           {/* Ask Q Part */}
//           <div>
//             <h3>Ask a Public question </h3>
//           </div>
//           <div className="align-items-center">
//             <p>Go to Question page</p>
//           </div>
//         </div>

//         <div className="container">
//           {/* form part */}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-2">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 className="form-control"
//                 ref={titleRef}
//               />
//             </div>
//             <div>
//               <textarea
//                 className="form-control p-4"
//                 id="exampleFormControlTextarea1"
//                 rows="3"
//                 placeholder="Question Description"
//                 ref={descriptionRef}
//               ></textarea>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Tag"
//                 className="form-control mt-2"
//                 ref={tagRef}
//               />
//             </div>
//             <div className="mt-2">
//               <button
//                 className="btn btn-primary fw-bold px-5 action_btn"
//                 type="submit"
//               >
//                 Post your Question
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AskQuestion;
















// CODE FROM ANSWER JSX 



// import React, { useRef, useState, useContext, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "../../axiosConfig.js";
// import { AppState } from "../../App.jsx";
// import Header from "../../Components/Header/Header.jsx";
// import { BsPersonCircle } from "react-icons/bs";
// import {toast } from 'react-toastify';




// const Answer = () => {
//   const location = useLocation();
//   const navigate=useNavigate()

//   // Parse the query string to extract the title and description
//   const queryParams = new URLSearchParams(location.search);
//   const title = queryParams.get('title');
//   const description = queryParams.get('description');

//   const questionid = queryParams.get('questionid');

//   const {user} = useContext(AppState)
  
// //  console.log(questionid,user.userid)
  
  
//   const [data, setData] = useState({});

//   const token = localStorage.getItem('token');
    
    
    
//   const answerDom= useRef(null)
  

//   async function handleSubmit(e){
//     e.preventDefault();
//     const answerValue = answerDom.current.value
//     const userid=user.userid
     
    
//     if(!questionid || !userid || !answerValue ){
//       toast.error('Please provide all required fields!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       return;
//     }
    
//   try {
//    await axios.post('/answers/postanswers',{
//     userid:userid,
//     questionid:questionid,
    
//     answer:answerValue,
    
//    },{ headers: {
//     Authorization: 'Bearer ' + token,
//   }})
//   answerDom.current.value = '';
   
  
//   toast.success('answer posted succesfully', {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//   });
//   window.location.reload();

 
   
//     } catch (error) {
    
//     toast.error('something went wrong', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//     console.log(error.response)
//   }
 
  
//   }
//   async function getAnswer() {
//     try {
      
//       const response = await axios.get('/answers/all-answers', {
//         headers: {
//           Authorization: 'Bearer ' + token,
//           questionid:questionid,
//         }
       
//       });
//       //  console.log(questionid)
  
//       // console.log(response.data); // Log the response data
//       setData(response.data);
//     } catch (error) {
      
//       console.log(error.response);
      
//     }
//   }  
  
  // useEffect(() => {
  //   if (queryParams.get('reload') === 'true' && localStorage.getItem('reloaded') === 'true') {
  //     localStorage.removeItem('reloaded');
  //     window.location.reload();
  //   }
  //   getAnswer();
  //    }, []);

//   return (
//     <section>
//       <Header />
//       <div className="landing bg-body-tertiary  pt-3">
//         <div className="container   pt-3 ">
//           {/* Question answer title and   answer */}
//           <div className="">
//             {/* top part */}
//             <span className="fw-semibold fs-2 ">Question</span> <br />
//             {/* <span className="fw-semibold fs-5">What is react-router-dom</span> */}
//             <span className="fw-semibold fs-5">{title}</span>
            
//             <span>
//               <p>{description} </p>
//               {/* <p>how does it work </p> */}
              
//             </span>
//           </div>

//           <div>
//             <hr />
//             <span className="fw-semibold fs-3">Answer from the Community</span>
//             {/* <hr /> */}
//           </div>


//           <div>
//           {data.allanswer && data.allanswer.map((item, index) => (
//               <a href="#" key = {index} className="text-decoration-none text-black">
//               <hr />
//               {/* user and arow container */}
//               <div className="d-flex justify-content-between ">
                
//                     <div className="d-md-flex align-items-center gap-3" >
//                       {/* user and question  */}
//                       <div className="user">
//                         {/* user */}
//                         <div className="user-icon">
//                           <BsPersonCircle />
//                         </div>
//                         {/* <div>Fitsum </div> */}
//                         <div className="m-2">{item.username}</div>
                        
//                       </div>
//                       <div>
                        
//                         <p>
//                           {item.answer}
//                         </p>
                        
//                       </div>
//                     </div>
                 

//                 {/* arow */}
//                 {/* <div className="align-items-center">
//                 </div> */}
//               </div>
//             </a>
//           ))}

//           </div>
//         </div>

//         <div className="d-flex flex-column align-items-center container  shadow-sm p-2 mb-5 bg-body rounded">
//           <div className="mt-5 pt-4">
//             {/* Ask Q Part */}
//             <div>
//               <h3>Answer the Top Question </h3>
//             </div>
//             {/* <div className="align-items-center mt-2">
//               <p>Go to Question page</p>
//             </div> */}
//           </div>

//           <div className="container">
//             {/* form part */}
//             <form action="" className=""   onSubmit={handleSubmit} >

//               <div>
//                 <textarea
//                   class="form-control p-4"
//                   id="exampleFormControlTextarea1"
//                   rows="3"
//                   placeholder="Answer "
//                   ref={answerDom}
                  
//                 ></textarea>
//               </div>

//               <div className=" mt-2">
//                 <button
//                   className="btn btn-primary fw-bold px-5 action_btn"
//                   type="Submit"
//                 >
//                   Post your Answer
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Answer;






















// code from login 



// import React from "react";

// import { useRef } from "react";
// import axios from "../../axiosConfig";
// import { Link, useNavigate } from "react-router-dom";

// const Login = ({ setCurrentPage }) => {
//   const navigate = useNavigate();
//   const emailDom = useRef();
//   const passwordDom = useRef();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const emailValue = emailDom.current.value;
//     const passValue = passwordDom.current.value;
//     if (!emailValue || !passValue) {
//       alert("please provide all required information ");
//       return;
//     }

//     // so let us send request to the database
//     try {
//       const { data } = await axios.post("/users/login", {
//         email: emailValue,
//         password: passValue,
//       });
//       alert("login successfull.  ");
//       localStorage.setItem("token", data.token);

//       console.log(data);
//       // const response= await axios.post("/users/login", {
//       //   email: emailValue,
//       //   password: passValue,
//       // });
//       // alert("login successfull.  ");
//       // console.log(response)

//       navigate("/");
//     } catch (error) {
//       alert(error?.response?.data?.msg);
//       console.log(error.response.data);
//     }

//     return (
//       <div className="col card mt-3 p-4 text-center">
//         <div>
//           <h4 className="m-3"> Login to your account </h4>
//           <p className="mb-2">
//             Don’t have an account?
//             <a
//               href=""
//               onClick={() => setCurrentPage("signup")}
//               className="fw-semibold text-decoration-none text-warning"
//             >
//               Create a new account
//             </a>
//           </p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           {/* <form action="#" > */}
//           <div className="d-flex flex-column gap-3">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="form-control p-3"
//               ref={emailDom}
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="form-control p-3"
//               ref={passwordDom}
//             />
//           </div>

//           <div className="mt-3">
//             <a
//               href=""
//               className="text-decoration-none text-warning d-flex justify-content-end"
//             >
//               Forgot Password
//             </a>
//           </div>

//           <div className="d-grid mt-2">
//             <button
//               className="btn btn-primary fw-bold px-5 action_btn "
//               type="submit"
//               // value="Login"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// };
// export default Login;
// const Login = ({setCurrentPage}) => {
//   return (
//     <div className="col card mt-3 p-4 text-center">
//       <div>
//         <h4 className="m-3"> Login to your account </h4>
//         <p className="mb-2">
//           Don’t have an account?{" "}
//           <a href="" onClick={()=>setCurrentPage ("signup")} className="fw-semibold text-decoration-none text-warning">
//             Create a new account
//           </a>
//         </p>
//       </div>
//       <form action="">
//         <div className="d-flex flex-column gap-3">
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="form-control p-3"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="form-control p-3"
//           />
//         </div>

//         <div className="mt-3">
//           <a
//             href=""
//             className="text-decoration-none text-warning d-flex justify-content-end"
//           >
//             Forgot Password
//           </a>
//         </div>

//         <div className="d-grid mt-2">
//           <button
//             className="btn btn-primary fw-bold px-5 action_btn "
//             type="submit"

//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>

// <div >
//     <h1>The form </h1>
//   </div>
//   );
// };

// export default Login;




















// code FROM HEADER .JSX






// const Header = () => {
//   return (
//     <section className="section_container">
//       <nav className="navbar p-0 navbar-expand-lg   ">
//         <div className="container  section_container">
//           <a className="navbar-brand " href="#">
//             <img src={logo} alt="" />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse justify-content-end  fw-semibold"
//             id="navbarNavDropdown"
//           >
//             <ul className="navbar-nav">
//               <li className="nav-item align-items-center d-flex">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item align-items-center d-flex">
//                 <a className="nav-link " href="#">
//                   How it Workes
//                 </a>
//               </li>
//               <li className="nav-item lign-items-center ">
//                 <a className="nav-link" href="#">
//                   <button className="btn btn-primary fw-bold px-5 action_btn  ">
//                     SIGN IN{" "}
//                   </button>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default Header;






























// CODE FROM HOME.JSX  

// import React, { useContext } from "react";
// import Header from "../../Components/Header/Header";
// import "../../index.css";
// import Question from "../../Components/Question/Question";
// import AskQuestion from "../../Components/AskQuestion/AskQuestion";
// import { useNavigate , Link } from "react-router-dom";
// import { PiUserCircleDuotone } from "react-icons/pi";
// import { FaAngleRight } from "react-icons/fa6";
// import { AppState } from "../../App";

// const Home = () => {
//   const { user, question } = useContext(AppState);
//   console.log(question);
//   console.log(user);

//   const navigate = useNavigate();
//   const handleAnswerClick = () => {
//     navigate("/answer"); // Navigates to the "/answer" route
//   };

//   const handleAskQuestionClick = () => {
//     navigate("/questions"); // Navigates to the "/questions" route
//   };

//   return (
//     <>
//       <Header />
//       <section className=" bg-body-tertiary">
//         <div className="d-flex justify-content-around pt-5  ">
//           <a
//             href="#"
// onClick={handleAskQuestionClick}
//             className="btn btn-primary action_btn px-5"
//           >

//             Ask Question
//           </a>
//           {/* <button className="btn btn-primary action_btn px-5">
//             Ask Question
//           </button> */}

//           <p className="fw-semibold">
//             <span className="text-warning">Welcome </span>{user?.username}
//           </p>
//         </div>

//         <div className="container mt-5">
//           <h2>Question</h2>

//           {question.allquestion &&
//             question.allquestion.map((item, index) => (
//             // <a

//             //     href="#"
//             //     className="text-decoration-none text-black"
//             //     onClick={handleAnswerClick}
//             //   >
//             //     <hr />
//             //     {/* user and arow container */}
//             //     <div className="d-flex justify-content-between">
//             //       <div className="d-md-flex align-items-center">
//             //         {/* user and question  */}
//             //         <div className="user">
//             //           {/* user */}
//             //           <div>
//             //             <PiUserCircleDuotone />
//             //           </div>
//             //           <div>{item.username} </div>
//             //         </div>
//             //         <div>
//             //           {/* question  */}
//             //           <p>{item.title}</p>
//             //         </div>
//             //       </div>

//             //       {/* arow */}
//             //       <div className="align-items-center">
//             //         <FaAngleRight />
//             //       </div>
//             //     </div>
//             //   </a>
//             <Link
//               className="text-decoration-none text-black"
//               key={index}
// to={`/answer?title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}&questionid=${encodeURIComponent(item.questionid)}`}
//             >
//               <hr />
//               <div className="d-flex justify-content-between align-items-center ">
//                 <div className="d-flex flex-column align-items-center gap-3">
//                   {/* user */}
//                   <div className="user-icon">
//                     <PiUserCircleDuotone />
//                   </div>
//                   <div>{item.username}</div>
//                 </div>
//                 <div>
//                   {/* question */}
//                   <p>{item.title}</p>
//                 </div>
//                 <div>
//                   {/* arrow */}
//                   <FaAngleRight />
//                 </div>
//               </div>
//             </Link>
//             ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;


























// CODE FROM APP.JSX 


// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import SignUpPage from './Components/SignUpPage/SignUpPage';
// import SignInPage from './Components/SignInPage/SignInPage';
// import AskQuestions from './Components/AskQuestions/AskQuestions';
// import Answer from './Components/Answer/Answer';
// import Home from './Components/Home/Home';
// import axios from './API/axiosConfig';
// import { createContext } from 'react';

// export const AppState = createContext();

// function App() {
//   const [user, setUser] = useState({});
//   const [question, setQuestions] = useState([]);
//   const [questionResponseConfig, setQuestionResponseConfig] = useState(null); 
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
    
//       navigate('/login');
//     } else {
//       fetchData();
//     }
//   }, []); 

//   async function fetchData() {
//     try {
//       const [userData, questionsData] = await Promise.all([
//         axios.get('/users/check', {
//           headers: {
//             Authorization: 'Bearer ' + localStorage.getItem('token'),
//           },
//         }),
//         axios.get('/questions/all-questions', {
//           headers: {
//             Authorization: 'Bearer ' + localStorage.getItem('token'),
//           },
//         }),
//       ]);
  
//       setUser(userData.data);
//       setQuestions(questionsData.data);
     
//       localStorage.setItem('userData', JSON.stringify(userData.data));
//       localStorage.setItem('questionsData', JSON.stringify(question));
//       setQuestionResponseConfig(questionsData.config); 
//     } catch (error) {
//       console.error(error.response);
//     }
//   }

//   console.log(user, 'user123');
//   console.log(question, 'questions123');

//   return (
//     <AppState.Provider value={{ user, setUser, question, setQuestions, questionResponseConfig }}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<SignUpPage />} />
//         <Route path="/register" element={<SignInPage />} />
//         <Route path="/ask-questions" element={<AskQuestions />} />
//         <Route path="/answers/:questionid" element={<Answer />} />
//       </Routes>
//     </AppState.Provider>
  
//   );
// }

// export default App;


























// CODE FROM APP.JS BACKEND 





/*1)Express app receives a request when someone hits a server for which it will create
request and response.
2)middleware is used to manipulate request.
3)It is middleware because it is a function that run between request and response cycle.
4) middleware stack. middleware that appear first will run first.
5)middleware is like pipeline which end with response object.
//Creating own middleware
//this middleware apply to each and every request
//so,  if we put in last then it will not work.
app.use((req,res,next)=> {
      console.log('Hello from middleware')
      next() 
})
//adding request time 
app.use((req,res,next)=> {
     req.requestTime= new Date().toISOString() //this is method and we need to call that
     next()
*/





/*- backend
  - app.js
  - routes
    - api.js
- frontend
  - src
    - components
      - ExampleComponent.js
    - App.js
    - index.js
*/

// const express = require('express');
// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// const apiRoutes = require('./routes/api');
// app.use('/api', apiRoutes);

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

















// CODE FROM MIDDLEWARE 



// const jwt = require('jsonwebtoken')
// async function authMiddleware (req,res,next){
//   const authHeader = req.headers.authorization
//   if(!authHeader || !authHeader.startsWith('Bearer ')){
//     return res.status(401).json({msg:'Authentication invalid'})
//   }
//   // console.log(authHeader)
//   const token = authHeader.split(' ')[1]
//   // console.log(token)
  
//   try {
//     const {username,userid}=jwt.verify(token,process.env.JWT_SECRET)
//     req.user={username,userid}
//     console.log(req.user)
//     next()
//   } catch (error) {
//     return res.status(401).json({msg:'Authentication invalid....'})
//   }
// }

// module.exports=authMiddleware



























// CODE FROM INDEX .JS FRONTEND 



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap';
// import { AuthContext } from './Components/AuthV1/AuthContext';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthContext>
//         <App />
//       </AuthContext>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );