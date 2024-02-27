require('dotenv').config()
const express = require("express");
var app = express();
const port = 7000;


const dbConnection = require("./db/dbConfig")

// user routes midle file
const userRoutes = require("./routes/userRoute");

// question routes midle file
const questionRoutes = require("./routes/questionRoute");

// authentication middleware
const authMiddleware = require("./middleware/authMiddleware")


// json middle ware to extract json data 
app.use(express.json())

// user midlewere route
app.use("/api/users" , userRoutes)

// question midlewere
app.use("/api/question" , authMiddleware, questionRoutes)




// answer midlewer

async function start(){
  try{
    const result = await dbConnection.execute("select 'test'")
    // console.log(result)
    await app.listen(port)
    console.log("database connection is stablished ")
    console.log(`listening to : port ${port}`)

  }catch(error){
      console.log(error.message);
  }
}
start()

// server start
// app.listen(port, (err) => {
//   if (err) console.log(err.message);
//   else console.log(`listening to : port ${port}`);
// });

















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