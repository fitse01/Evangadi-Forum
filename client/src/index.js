import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import {AuthContext} from './Components/AuthV1/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <AuthContext> */}
        <App />
    {/* </AuthContext>     */}
    </BrowserRouter>
  </React.StrictMode>
);

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